import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Zap, Droplet, Cylinder, Building, Paintbrush, ShieldAlert } from 'lucide-react';
import plegadoraImg from '../../assets/plegadora.png';
import guillotinaImg from '../../assets/guillotina.png';
import cabinaImg from '../../assets/cabina.png';
import tornoImg from '../../assets/torno.png';
import electromecanicaImg from '../../assets/electromecanica.png';
import hidraulicaImg from '../../assets/hidraulica.png';
import neumaticaImg from '../../assets/neumatica.png';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const serviceList = [
    { icon: <Wrench size={26} />, title: 'Mecánica General', description: 'Mantenimiento preventivo y correctivo de motores, transmisiones y tren delantero.', img: tornoImg },
    { icon: <Zap size={26} />, title: 'Electromecánica', description: 'Diagnóstico por scanner, reparación de fallas eléctricas, alternadores y cableados.', img: electromecanicaImg },
    { icon: <Droplet size={26} />, title: 'Hidráulica', description: 'Reparación de botellas hidráulicas, mangueras de presión y sistemas de levante.', img: hidraulicaImg },
    { icon: <Cylinder size={26} />, title: 'Neumática', description: 'Atención especializada a sistemas de frenos de aire y compresores industriales.', img: neumaticaImg },
    { icon: <Building size={26} />, title: 'Estructuras Pesadas', description: 'Fabricación y reparación estructural de chasis, carrocerías y tolvas de transporte.', img: plegadoraImg },
    { icon: <ShieldAlert size={26} />, title: 'Desabolladura Térmica', description: 'Enderezado de chasis con equipos de tensión y recuperación de cabinas.', img: guillotinaImg },
    { icon: <Paintbrush size={26} />, title: 'Pintura al Horno', description: 'Acabados de calidad automotriz en cabina de pintura presurizada.', img: cabinaImg },
  ];

  return (
    <section id="services" className="py-20 bg-white text-slate-800 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase tracking-wider text-sm"
          >
            Nuestra Especialidad
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-slate-900"
          >
            Servicios <span className="text-secondary">Integrales</span> Multimarca
          </motion.h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Abordamos cada vehículo o maquinaria con un enfoque multidisciplinario para garantizar reparaciones rápidas, precisas y duraderas.
          </p>
        </div>

        {/* Interactive Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-full">
          
          {/* Left: Interactive List */}
          <div className="lg:col-span-5 flex flex-col space-y-3 lg:h-[480px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-transparent">
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 10 }}
                className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${activeIndex === index ? 'bg-primary/5 border-primary/20 shadow-sm' : 'border-transparent hover:bg-gray-50'}`}
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary rounded-l-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors duration-300 ${activeIndex === index ? 'bg-secondary text-white' : 'bg-gray-100 text-primary'}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg transition-colors ${activeIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm mt-1 leading-relaxed transition-opacity ${activeIndex === index ? 'text-gray-600 opacity-100' : 'text-gray-500 opacity-80'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Smooth Image Transitioning Area */}
          <div className="lg:col-span-7 relative h-64 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={serviceList[activeIndex].img}
                  alt={serviceList[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay mapping safe color backdrops on top for aesthetics if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
