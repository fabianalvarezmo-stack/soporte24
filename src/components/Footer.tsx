import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-20 pb-10 text-white border-t border-brand-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-black text-lg">
                S
              </div>
              <span className="font-extrabold text-xl tracking-tight uppercase">
                Soporte<span className="text-brand-primary">24</span>Horas
              </span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Líderes en arriendo de tecnología para corporaciones, eventos y home office en todo Chile. Compromiso total con tu continuidad operativa a través de infraestructura moderna.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Equipos</h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#equipos" className="hover:text-white transition-colors">Notebooks Corporativos</a></li>
              <li><a href="#equipos" className="hover:text-white transition-colors">Computadores de Escritorio</a></li>
              <li><a href="#equipos" className="hover:text-white transition-colors">Pantallas LED y Touch</a></li>
              <li><a href="#equipos" className="hover:text-white transition-colors">Proyectores y Telones</a></li>
              <li><a href="#equipos" className="hover:text-white transition-colors">Impresoras Multifuncionales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog Técnico</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Soporte Express</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-primary flex-shrink-0" />
                <span>Santiago, Chile. Cobertura nacional para eventos.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-primary flex-shrink-0" />
                <span>+56 9 7777 7777</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-primary flex-shrink-0" />
                <span>contacto@soporte24horas.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 uppercase tracking-widest">
           <p>© {currentYear} Soporte 24 Horas. Todos los derechos reservados.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacidad</a>
              <a href="#" className="hover:text-white">Términos</a>
              <a href="#" className="hover:text-white">Sitemap</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
