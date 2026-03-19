import { motion } from 'framer-motion';
import plegadoraImg from '../../assets/plegadora.png';
import guillotinaImg from '../../assets/guillotina.png';
import cabinaImg from '../../assets/cabina.png';
import tornoImg from '../../assets/torno.png';

const Equipment = () => {
  const machinery = [
    { title: 'Plegadora LVD 220 Ton', description: 'Capacidad de plegado de alta precisión para estructuras pesadas.', img: plegadoraImg },
    { title: 'Guillotina CNC', description: 'Corte exacto en distintos espesores de planchas de acero.', img: guillotinaImg },
    { title: 'Cabina de Pintura al Horno', description: 'Acabados perfectos libres de impurezas con secado acelerado y filtrado industrial.', img: cabinaImg },
    { title: 'Tornos Paralelos', description: 'Mecanizado de piezas cilíndricas de grandes dimensiones.', img: tornoImg },
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
            Maquinaria de <span className="text-secondary">Vanguardia</span>
          </motion.h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Contamos con más de 13,000 metros cuadrados equipados con tecnología avanzada para asegurar la máxima precisión en cada proyecto.
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
