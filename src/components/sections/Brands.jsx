import { motion } from 'framer-motion';

const Brands = () => {
  const brands = [
    { 
      name: 'Mercedes-Benz', 
      category: 'Heavy Duty',
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-[#333333] stroke-[3] group-hover:stroke-primary transition-colors">
          <circle cx="50" cy="50" r="40" className="stroke-slate-400" />
          <line x1="50" y1="50" x2="50" y2="15" className="stroke-slate-400" />
          <line x1="50" y1="50" x2="80" y2="68" className="stroke-slate-400" />
          <line x1="50" y1="50" x2="20" y2="68" className="stroke-slate-400" />
        </svg>
      )
    },
    { 
      name: 'Volkswagen', 
      category: 'Commercial',
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-2 group-hover:scale-105 transition-transform">
          <circle cx="50" cy="50" r="40" className="fill-[#001e50] stroke-none" />
          <path d="M 30 25 L 50 60 L 70 25 M 35 60 L 50 85 L 65 60" className="stroke-white stroke-[3]" />
        </svg>
      )
    },
    { 
      name: 'Chevrolet', 
      category: 'Fleet',
      logo: (
        <svg viewBox="0 0 100 100" className="w-14 h-14 group-hover:scale-105 transition-transform">
          <path d="M 20 40 L 40 40 L 40 25 L 60 25 L 60 40 L 80 40 L 80 55 L 60 55 L 60 70 L 40 70 L 40 55 L 20 55 Z" className="fill-[#e4a100] stroke-[#c28400] stroke-2" />
        </svg>
      )
    },
    { 
      name: 'Kenworth', 
      category: 'Trucks',
      logo: (
        <div className="w-12 h-12 rounded-full bg-[#e31b23] border-2 border-slate-100 flex items-center justify-center font-black text-lg text-white group-hover:scale-105 transition-transform shadow-sm">
          KW
        </div>
      )
    },
    { 
      name: 'Dambroz', 
      category: 'Carrocerías',
      logo: (
         <div className="w-12 h-12 flex items-center justify-center font-black text-2xl italic text-[#cf2a27] group-hover:scale-105 transition-transform tracking-widest">
           D.
         </div>
      )
    },
    { 
      name: 'Robustec', 
      category: 'Equipamiento',
      logo: (
        <div className="w-12 h-12 flex items-center justify-center font-black text-xl text-[#005aab] group-hover:scale-105 transition-transform border-b-4 border-[#cf2a27]">
          [R]
        </div>
      )
    },
    { 
      name: 'JAC Motors', 
      category: 'Logistics',
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 stroke-2 group-hover:scale-105 transition-transform">
          <polygon points="50,15 61,40 88,40 66,55 74,82 50,65 26,82 34,55 12,40 39,40" className="fill-[#e31b23] stroke-none" />
        </svg>
      )
    },
  ];

  // Duplicate for seamless scroll
  const scrollBrands = [...brands, ...brands, ...brands];

  return (
    <section id="brands" className="py-12 bg-gray-50 text-slate-800 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 font-semibold text-xs border-b border-gray-200 pb-2 inline-block tracking-widest uppercase"
        >
          Especialistas en Marcas Líderes y Representaciones
        </motion.p>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
          className="flex gap-6 w-max px-4"
        >
          {scrollBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, borderColor: '#1a4375', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              className="w-44 h-32 flex flex-col items-center justify-center border border-gray-100 rounded-2xl bg-white shadow-sm p-4 text-center group cursor-pointer flex-shrink-0 transition-shadow duration-200"
            >
              <div className="mb-2">
                {brand.logo}
              </div>
              <span className="font-bold text-xs tracking-wide text-slate-800 group-hover:text-primary transition-colors mt-1">
                {brand.name}
              </span>
              <span className="text-secondary opacity-90 text-[10px] uppercase font-bold mt-0.5">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Fade masks for smoothness */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Brands;
