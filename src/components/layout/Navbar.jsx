import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL, LINKEDIN_URL } from '../../config/contactLinks';
import logo from '../../assets/logos/maestranza-montevideo.svg';

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
            <img
              src={logo}
              alt="Maestranza Montevideo"
              width="288"
              height="168"
              className={`h-9 sm:h-12 w-auto transition-transform ${isScrolled ? 'scale-90' : 'scale-100'}`}
              loading="eager"
              decoding="async"
            />
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
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#0A66C2] hover:bg-[#004182] text-white p-2.5 rounded-md shadow-md transition-all border border-white/20"
            aria-label="Visita el perfil de LinkedIn de Matias Davila"
            title="Visita el perfil de LinkedIn de Matias Davila"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menu principal' : 'Abrir menu principal'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
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
            id="mobile-navigation"
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
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white text-center py-3 rounded-md font-semibold flex items-center justify-center gap-2 border border-white/20"
                >
                  <Linkedin size={18} />
                  LinkedIn
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
