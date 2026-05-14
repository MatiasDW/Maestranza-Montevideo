import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Box } from 'lucide-react';

const About = () => {
  const stats = [
    {
      id: 'experience',
      icon: <Clock size={36} className="text-secondary" />,
      value: '15+',
      label: 'Años de Experiencia',
      surface: 'bg-white',
    },
    {
      id: 'infrastructure',
      icon: <Box size={36} className="text-secondary" />,
      value: '13.000',
      label: 'Metros Cuadrados de Infraestructura',
      surface: 'bg-white',
    },
    {
      id: 'multibrand',
      icon: <ShieldCheck size={36} className="text-white" />,
      value: 'Multimarca',
      label: 'Atención a camiones y semirremolques',
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
                key={stat.id}
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
