import Catalog from '../components/Catalog';

export default function Equipos() {
  return (
    <div className="pt-24">
       <div className="bg-brand-dark py-20 text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">Nuestros Equipos</h1>
            <p className="text-brand-muted max-w-2xl">
              Explora nuestro catálogo completo de laptops, computadores, pantallas y más. Tecnología de punta para su éxito.
            </p>
          </div>
       </div>
       <Catalog />
    </div>
  );
}
