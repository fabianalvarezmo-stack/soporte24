import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Equipos', href: '#equipos' },
    { name: 'Arriendos', href: '#arriendos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-brand-dark shadow-lg' : 'py-5 bg-brand-dark'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-black text-lg">
            S
          </div>
          <span className="font-extrabold text-xl tracking-tight uppercase">
            Soporte<span className="text-brand-primary">24</span>Horas
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[13px] font-bold uppercase tracking-wider text-white/70 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+56977777777"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90 px-4 py-2 hover:text-brand-primary transition-colors"
          >
            <Phone size={14} />
            Llamar
          </motion.a>
          <motion.a
            href="#cotizar"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded hover:bg-white hover:text-brand-dark transition-all"
          >
            Cotizar
          </motion.a>
          <button 
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-900 border-b border-neutral-50 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <a href="tel:+56977777777" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-neutral-200">
                  <Phone size={18} />
                  Llamar
                </a>
                <a href="https://wa.me/56977777777" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white">
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
