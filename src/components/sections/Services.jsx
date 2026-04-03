import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Truck, Building, Paintbrush, Cog } from 'lucide-react';
import plegadoraImg from '../../assets/plegadora.png';
import cabinaImg from '../../assets/cabina.png';
import hidraulicaImg from '../../assets/hidraulica.png';
import semitrailerRepairImg from '../../assets/updated/semitrailer-repair.jpg';
import truckRepairImg from '../../assets/updated/truck-repair.jpg';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const serviceList = [
    { icon: <Paintbrush size={26} />, title: 'Desabolladura y Pintura', description: 'Recuperación de superficies y terminaciones automotrices con estándares profesionales.', img: cabinaImg },
    { icon: <Building size={26} />, title: 'Fabricación de carrocerías', description: 'Diseño y fabricación de carrocerías para distintos tipos de operación y carga.', img: plegadoraImg },
    { icon: <Truck size={26} />, title: 'Reparación de semirremolques', description: 'Intervención estructural y funcional en semirremolques de transporte.', img: semitrailerRepairImg },
    { icon: <Wrench size={26} />, title: 'Reparación de camiones', description: 'Reparaciones integrales para mantener continuidad operativa de flotas y unidades.', img: truckRepairImg },
    { icon: <Cog size={26} />, title: 'Hidráulica, mecánica y neumática', description: 'Diagnóstico y reparación de sistemas hidráulicos, mecánicos y neumáticos.', img: hidraulicaImg },
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
            Procesos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mt-2 text-slate-900"
          >
            Procesos de <span className="text-secondary">Trabajo</span>
          </motion.h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Ejecutamos procesos técnicos para reparación, fabricación y mantención integral de vehículos de carga.
          </p>
        </div>

        {/* Interactive Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-full">
          
          {/* Left: Interactive List */}
          <div className="lg:col-span-5 flex flex-col space-y-3 lg:h-[480px] lg:overflow-y-auto pr-0 lg:pr-2 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-transparent">
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
          <div className="lg:col-span-7 relative h-56 sm:h-72 lg:h-[480px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-gray-100">
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
