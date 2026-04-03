import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL, INSTAGRAM_URL } from '../../config/contactLinks';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Equipamiento', href: '#equipment' },
    { name: 'Clientes', href: '#brands' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <a href="#hero" className="flex items-center py-2 h-14">
            <svg viewBox="0 0 240 80" className={`h-9 sm:h-12 w-auto transition-transform ${isScrolled ? 'scale-90' : 'scale-100'}`} fill="none">
              {/* Shield/Banner Background */}
              <path d="M 0 0 L 240 0 L 240 55 L 120 72 L 0 55 Z" fill="#1a4375" />
              {/* Inner Chevron Line */}
              <path d="M 15 52 L 120 66 L 225 52" stroke="white" strokeWidth="2" fill="none" className="opacity-80" />
              {/* Text */}
              <text x="120" y="27" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="700" letterSpacing="1.5" fontFamily="Georgia, serif">
                MAESTRANZA
              </text>
              <text x="120" y="49" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="900" letterSpacing="1" fontFamily="Georgia, serif">
                MONTEVIDEO
              </text>
            </svg>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 font-semibold text-sm uppercase tracking-wide ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-gray-200 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-md font-semibold text-sm transition-transform duration-200 hover:scale-105 shadow-md"
          >
            Cotizar
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white p-2.5 rounded-md shadow-md transition-colors"
            aria-label="Contáctenos por WhatsApp"
            title="Contáctenos por WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4)] hover:brightness-110 text-white p-2.5 rounded-md shadow-md transition-all border border-white/20"
            aria-label="Visítanos en Instagram"
            title="Visítanos en Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-gray-200 hover:text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100"
          >
            <div className="flex flex-col px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-700 hover:text-primary py-2 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary hover:bg-primary/80 text-white text-center py-3 rounded-md font-semibold mt-2"
              >
                Cotizar ahora
              </a>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-green-600 hover:bg-green-500 text-white text-center py-3 rounded-md font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4)] hover:brightness-110 text-white text-center py-3 rounded-md font-semibold flex items-center justify-center gap-2 border border-white/20"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
