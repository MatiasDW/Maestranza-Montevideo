import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Box } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Clock size={36} className="text-secondary" />,
      value: '15+',
      label: 'Años de Experiencia',
      surface: 'bg-white',
    },
    {
      icon: <Box size={36} className="text-secondary" />,
      value: '13.000',
      label: 'Metros Cuadrados de Infraestructura',
      surface: 'bg-white',
    },
    {
      icon: <ShieldCheck size={36} className="text-white" />,
      value: 'ISO 9001:2015',
      label: 'Gestión de Calidad Certificada',
      surface: 'bg-gradient-to-br from-primary to-[#2b5d98]',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] text-slate-800 overflow-hidden border-b border-gray-100">
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
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
              Líderes en Soluciones para el <span className="text-secondary">Transporte y la Construcción</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg/relaxed">
              Maestranza Montevideo S.A. ha consolidado su posición en el mercado chileno entregando soluciones de alta ingeniería para Compañías de Seguros Generales y empresas de transporte. 
              Nuestra vasta trayectoria nos permite abordar proyectos de reparación y fabricación con máxima seguridad y eficiencia.
            </p>
            
            {/* ISO Certification Badge */}
            <div className="relative bg-white border border-primary/15 rounded-2xl shadow-sm p-4 sm:p-5 max-w-xl overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-secondary to-primary" />
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 ml-2">
                  <Award size={30} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary">Certificación ISO 9001:2015</h4>
                  <p className="text-sm text-gray-500">Gestión de calidad para procesos de manufactura y servicios de reparación.</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 bg-primary/5 border border-primary/10 rounded-xl px-3 py-2">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">Entidad certificadora</p>
                  <p className="text-sm text-gray-600 mt-0.5">Logo oficial pendiente de incorporación</p>
                </div>
                <div className="h-16 rounded-xl border border-dashed border-primary/30 bg-white flex items-center justify-center">
                  <span className="text-xs text-primary/80 font-semibold">Logo aquí</span>
                </div>
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
                whileHover={{ y: -8 }}
                className={`${index === 2 ? 'sm:col-span-2' : ''} ${stat.surface} border border-gray-100 shadow-sm p-8 rounded-2xl flex flex-col items-center text-center space-y-3 transition-shadow hover:shadow-md`}
              >
                <div className={`p-4 rounded-full ${index === 2 ? 'bg-white/15 border border-white/25' : 'bg-secondary/10'}`}>
                  {stat.icon}
                </div>
                <h3 className={`text-3xl font-extrabold ${index === 2 ? 'text-white' : 'text-primary'}`}>{stat.value}</h3>
                <p className={`${index === 2 ? 'text-blue-100' : 'text-gray-500'} text-sm font-medium`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
