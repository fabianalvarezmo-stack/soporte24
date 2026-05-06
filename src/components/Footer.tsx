import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-20 pb-10 text-white border-t border-brand-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 md:h-12 overflow-hidden flex items-center">
                <img 
                   src="https://soporte24horas.cl/wp-content/uploads/2021/04/logo-soporte.png" 
                   alt="Soporte 24 Horas" 
                   className="h-full w-auto object-contain brightness-0 invert" 
                   referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">
              Líderes en arriendo de tecnología para corporaciones, eventos y home office en todo Chile. Compromiso total con tu continuidad operativa a través de infraestructura moderna.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-tight">Equipos</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link to="/equipos" className="hover:text-brand-primary transition-colors">Notebooks Corporativos</Link></li>
              <li><Link to="/equipos" className="hover:text-brand-primary transition-colors">Computadores de Escritorio</Link></li>
              <li><Link to="/equipos" className="hover:text-brand-primary transition-colors">Pantallas LED y Touch</Link></li>
              <li><Link to="/equipos" className="hover:text-brand-primary transition-colors">Proyectores y Telones</Link></li>
              <li><Link to="/equipos" className="hover:text-brand-primary transition-colors">Impresoras Multifuncionales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-tight">Empresa</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link to="/nosotros" className="hover:text-brand-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/proyectos" className="hover:text-brand-primary transition-colors">Proyectos</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Blog Técnico</Link></li>
              <li><Link to="/soporte-express" className="hover:text-brand-primary transition-colors">Soporte Express</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-tight">Contacto</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-primary flex-shrink-0" />
                <span>Santiago, Chile. Cobertura nacional para eventos.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-primary flex-shrink-0" />
                <span>+56 9 9579 1499</span>
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
