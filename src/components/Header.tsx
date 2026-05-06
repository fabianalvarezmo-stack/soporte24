import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

// Using a custom X icon since lucide doesn't have it by default in some versions
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Equipos', href: '/equipos' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Blog Técnico', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/Soporte-24-Horas-Ltda-331223913554847/", label: "Facebook" },
    { icon: <XIcon />, href: "https://x.com/soporte24horas", label: "X" },
    { icon: <Linkedin size={18} />, href: "https://cl.linkedin.com/company/soporte-24-horas-ltda-", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/soporte24horas.cl/", label: "Instagram" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-brand-dark shadow-lg' : 'py-4 bg-brand-dark'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between text-white">
        {/* <Link to="/" className="flex items-center gap-3"> */}
          <div className="h-10 md:h-14 overflow-hidden flex items-center">
            <img 
               src="../../img/logo.png" 
               alt="Notebooks y Pantallas" 
               className="h-full w-auto object-contain brightness-0 invert" 
               referrerPolicy="no-referrer"
            />
          </div>
        {/*        </Link>*/}

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                className={`text-[11px] font-black uppercase tracking-widest transition-colors ${
                  location.pathname === link.href ? 'text-brand-primary underline underline-offset-8' : 'text-white/70 hover:text-brand-primary'
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-brand-primary hover:scale-110 transition-all"
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <Link
            to="/contacto"
            className="bg-brand-primary text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded hover:bg-white hover:text-brand-dark transition-all"
          >
            Cotizar
          </Link>
          
          <button 
            className="lg:hidden p-2 text-white"
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
            className="lg:hidden bg-brand-dark border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-bold border-b border-white/5 pb-2 uppercase tracking-tight ${
                    location.pathname === link.href ? 'text-brand-primary' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex gap-4 pt-4 border-t border-white/5">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <a href="https://wa.me/56995791499" className="flex items-center justify-center gap-2 py-4 rounded bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm">
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
