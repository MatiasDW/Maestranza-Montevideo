import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../../config/contactLinks';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(10,30,55,0.8), rgba(10,30,55,0.9)), url('https://images.unsplash.com/photo-1590402444527-0838e121703e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(34,197,94,0.14),transparent_32%)]" />
      
      <div className="max-w-5xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Corporate Logo Crest — Large & Central */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4"
          >
            <svg viewBox="0 0 300 100" className="h-24 md:h-32 w-auto drop-shadow-2xl" fill="none">
              <path d="M 0 0 L 300 0 L 300 68 L 150 92 L 0 68 Z" fill="#1a4375" />
              <path d="M 12 64 L 150 85 L 288 64" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
              <text x="150" y="34" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" letterSpacing="3" fontFamily="Georgia, serif">MAESTRANZA</text>
              <text x="150" y="62" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" letterSpacing="2" fontFamily="Georgia, serif">MONTEVIDEO</text>
            </svg>
          </motion.div>

          <span className="inline-block bg-white/10 text-gray-300 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            Ingeniería & Servicios Automotrices
          </span>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Soluciones integrales en Mecánica, Hidráulica y Estructuras para el Transporte y la Construcción. Calidad certificada ISO 9001.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mt-2">
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <p className="text-white font-bold text-sm">+15 años</p>
              <p className="text-gray-300 text-xs mt-0.5">Experiencia técnica</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <p className="text-white font-bold text-sm">Multimarca</p>
              <p className="text-gray-300 text-xs mt-0.5">Camiones y semirremolques</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <p className="text-white font-bold text-sm">Atención rápida</p>
              <p className="text-gray-300 text-xs mt-0.5">Cotización por WSP</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/80 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-xl text-lg w-full sm:w-auto border border-white/20"
            >
              Cotizar ahora <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600/90 hover:bg-green-500 text-white border border-green-400/40 font-bold px-8 py-4 rounded-lg text-lg w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Contáctenos por WSP <MessageCircle size={20} />
            </motion.a>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Cobertura en Santiago y atención a empresas y particulares.
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default Hero;
