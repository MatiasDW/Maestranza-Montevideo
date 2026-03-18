import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Equipment from './components/sections/Equipment';
import Brands from './components/sections/Brands';
import Contact from './features/contact/Contact';
import truckSil1 from './assets/truck_sil_1.png';
import truckSil2 from './assets/truck_sil_2.png';
import truckSil3 from './assets/truck_sil_3.png';

function App() {
  return (
    <div className="bg-gray-50 text-slate-800 font-sans antialiased selection:bg-primary selection:text-white relative overflow-x-hidden">
      
      <Navbar />
      <main className="relative z-10">
        <Hero />

        {/* ═══ SECTION: About — Semi-trailer cruza hacia la derecha ═══ */}
        <div className="relative overflow-hidden">
          <motion.img
            src={truckSil1}
            alt=""
            animate={{ x: ['-60%', '120%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
            className="absolute top-1/2 -translate-y-1/2 w-[700px] md:w-[900px] lg:w-[1100px] opacity-[0.15] pointer-events-none z-0"
          />
          <About />
        </div>

        {/* ═══ SECTION: Services — Cab-over europeo cruza hacia la izquierda ═══ */}
        <div className="relative overflow-hidden">
          <motion.img
            src={truckSil2}
            alt=""
            animate={{ x: ['120%', '-60%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 35 }}
            className="absolute top-1/4 w-[600px] md:w-[800px] lg:w-[1000px] opacity-[0.15] pointer-events-none z-0"
          />
          <Services />
        </div>

        {/* ═══ SECTION: Equipment — Flatbed cruza hacia la derecha ═══ */}
        <div className="relative overflow-hidden">
          <motion.img
            src={truckSil3}
            alt=""
            animate={{ x: ['-60%', '120%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
            className="absolute bottom-8 w-[700px] md:w-[900px] lg:w-[1100px] opacity-[0.15] pointer-events-none z-0"
          />
          <Equipment />
        </div>

        {/* ═══ SECTION: Brands — Semi-trailer regresa hacia la izquierda ═══ */}
        <div className="relative overflow-hidden">
          <motion.img
            src={truckSil1}
            alt=""
            animate={{ x: ['120%', '-60%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
            className="absolute top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px] opacity-[0.15] pointer-events-none z-0"
          />
          <Brands />
        </div>

        {/* ═══ SECTION: Contact — Cab-over cruza hacia la derecha ═══ */}
        <div className="relative overflow-hidden">
          <motion.img
            src={truckSil2}
            alt=""
            animate={{ x: ['-60%', '120%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 38 }}
            className="absolute top-1/3 w-[700px] md:w-[900px] lg:w-[1100px] opacity-[0.15] pointer-events-none z-0"
          />
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary border-t border-primary/80 py-8 text-center text-sm text-blue-200/70 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Maestranza Montevideo S.A. Todos los derechos reservados.</p>
          <p className="text-xs mt-1 text-blue-300/50">Fresia 1927, Renca, Santiago.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
