import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Box } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Clock size={40} className="text-secondary" />, value: '15+', label: 'Años de Experiencia' },
    { icon: <Box size={40} className="text-secondary" />, value: '13.000', label: 'Metros Cuadrados de Infraestructura' },
    { icon: <ShieldCheck size={40} className="text-secondary" />, value: 'ISO 9001:2008', label: 'Gestión de Calidad Certificada' },
  ];

  return (
    <section id="about" className="py-20 bg-white text-slate-800 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text and highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Quiénes Somos</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Líderes en Soluciones para el <span className="text-secondary">Transporte y la Construcción</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Maestranza Montevideo S.A. ha consolidado su posición en el mercado chileno entregando soluciones de alta ingeniería para Compañías de Seguros Generales y empresas de transporte. 
              Nuestra vasta trayectoria nos permite abordar proyectos de reparación y fabricación con máxima seguridad y eficiencia.
            </p>
            
            {/* ISO Badge */}
            <div className="flex items-center gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10 max-w-md">
              <Award size={48} className="text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-primary">Certificación ISO 9001:2008</h4>
                <p className="text-sm text-gray-500">Garantía de calidad en cada proceso de manufactura y servicio de reparación.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`${index === 2 ? 'sm:col-span-2' : ''} bg-white border border-gray-100 shadow-sm p-8 rounded-2xl flex flex-col items-center text-center space-y-3`}
              >
                <div className="p-4 bg-secondary/10 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-primary">{stat.value}</h3>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
