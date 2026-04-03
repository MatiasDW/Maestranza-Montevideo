import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, MessageCircle, Instagram } from 'lucide-react';
import { useContactForm } from './useContactForm';
import { WHATSAPP_URL, INSTAGRAM_URL } from '../../config/contactLinks';

const Contact = () => {
  const { submitForm, isLoading, isSuccess, isError, errorMessage, resetStatus } = useContactForm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(formData);
  };

  // Reset form inputs on success
  useEffect(() => {
    if (isSuccess) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Auto-clear success message after 5 seconds to return to IDLE
      const timer = setTimeout(resetStatus, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, resetStatus]);

  return (
    <section id="contact" className="py-20 bg-gray-50 text-slate-800 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase tracking-wider text-sm"
          >
            Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mt-2 text-slate-900"
          >
            Hablemos de tu <span className="text-secondary">Próximo Proyecto</span>
          </motion.h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Pide tu cotización o agenda una visita técnica. Estaremos encantados de atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Dirección</h4>
                <p className="text-gray-600 text-sm mt-1">Fresia 1927, Renca, Santiago, Chile.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Teléfonos</h4>
                <p className="text-gray-600 text-sm mt-1">Celular: +56 9 9318 1569</p>
                <p className="text-gray-600 text-sm">Fijo: 2 2646 1232</p>
                <p className="text-gray-600 text-sm">Fijo: 2 2641 5351</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Correo Electrónico</h4>
                <p className="text-gray-600 text-sm mt-1">administracion@maestranzamontevideo.cl</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white border border-green-400/40 p-4 rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm shadow-sm transition-colors"
              >
                <MessageCircle size={18} />
                Contáctenos por WSP
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-gray-50 text-slate-800 border border-gray-200 p-4 rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm shadow-sm transition-colors"
              >
                <Instagram size={18} />
                Ir a Instagram
              </a>
            </div>

            {/* Google Map Placeholder (Optional framing) */}
            <div className="border border-gray-200 rounded-2xl h-48 bg-gray-100/50 flex items-center justify-center text-gray-500 font-medium">
              [Mapa Satelital de Renca]
            </div>
          </motion.div>

          {/* Right Side: Contact Form with Robust Feedback */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-gray-100 p-5 sm:p-8 rounded-2xl shadow-xl relative"
          >
            {/* Robust Toast Alert Implementation */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl mb-6 flex items-center gap-3"
                >
                  <CheckCircle2 size={24} />
                  <div>
                    <span className="font-bold">¡Envío Exitoso!</span>
                    <p className="text-xs">Hemos recibido tus datos y te contactaremos a la brevedad.</p>
                  </div>
                </motion.div>
              )}

              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl mb-6 flex items-center gap-3"
                >
                  <AlertCircle size={24} className="flex-shrink-0" />
                  <div className="flex-1">
                    <span className="font-bold">Error de Envío</span>
                    <p className="text-xs">{errorMessage}</p>
                  </div>
                  <button onClick={resetStatus} className="text-red-400 hover:text-white text-sm">Cerrar</button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-secondary focus:bg-white transition-all disabled:opacity-50"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-secondary focus:bg-white transition-all disabled:opacity-50"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-600">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-secondary focus:bg-white transition-all disabled:opacity-50"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600">Mensaje / Requerimiento</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  disabled={isLoading}
                  className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-slate-800 resize-none focus:outline-none focus:border-secondary focus:bg-white transition-all disabled:opacity-50"
                  placeholder="Describe brevemente lo que necesitas cotizar..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed group mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Cotización <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
