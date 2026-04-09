import { motion } from 'framer-motion';
import guillotinaImg from '../../assets/guillotina.jpg';
import migWeldingImg from '../../assets/updated/mig-welding.jpg';
import semitrailerRepairImg from '../../assets/updated/semitrailer-repair.jpg';

const Equipment = () => {
  const machinery = [
    { title: 'Cortadora y plegadora', description: 'Equipo para corte y conformado preciso de planchas y perfiles estructurales.', img: guillotinaImg },
    { title: 'Soldadoras MIG', description: 'Soldadura de alta resistencia para reparación y fabricación de componentes metálicos.', img: migWeldingImg },
    { title: 'Mesa geométrica', description: 'Alineación estructural y control dimensional para trabajos de alta exigencia.', img: semitrailerRepairImg },
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-50 text-slate-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase tracking-wider text-sm"
          >
            Infraestructura
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mt-2 text-slate-900"
          >
            Nuestra <span className="text-secondary">Maquinaria</span>
          </motion.h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Contamos con equipamiento especializado para procesos de corte, soldadura y alineación estructural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {machinery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-video border border-gray-200 shadow-sm backdrop-blur-sm bg-white"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-200 opacity-90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Equipment;
