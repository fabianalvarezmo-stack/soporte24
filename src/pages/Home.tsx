import Hero from '../components/Hero';
import Catalog from '../components/Catalog';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Equipamiento Destacado</h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Disponemos de un amplio stock de última tecnología para su oficina, eventos y más.
          </p>
        </div>
      </div>
      <Catalog />
    </>
  );
}
