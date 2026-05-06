import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Notebooks y Pantallas</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mb-8">
            Disponemos de un amplio stock de última tecnología para su oficina, eventos y más.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link 
               to="/proyectos" 
               className="px-8 py-3 bg-brand-dark text-white rounded font-bold uppercase tracking-widest text-xs hover:bg-brand-primary transition-all"
             >
               Visita nuestra galería
             </Link>
             <Link 
               to="/contacto" 
               className="px-8 py-3 bg-white border border-brand-border text-brand-dark rounded font-bold uppercase tracking-widest text-xs hover:bg-brand-bg transition-all"
             >
               Cotiza con nosotros
             </Link>
          </div>
        </div>
      </div>
      <Catalog />
    </>
  );
}
