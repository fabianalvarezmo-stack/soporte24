import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Monitor, Laptop, Smartphone, Printer, Tv, Projector as Proj } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../constants';

const categoryIcons: Record<string, any> = {
  all: Monitor,
  Notebook: Laptop,
  Computador: Monitor,
  Apple: Smartphone,
  Pantalla: Tv,
  Impresora: Printer,
  Proyector: Proj,
};

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="equipos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Catálogo de Equipos</h2>
            <p className="text-neutral-600 text-lg">
              Equipos corporativos de las mejores marcas. Mantenimiento preventivo incluido.
            </p>
          </div>
          <div className="relative group min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted group-focus-within:text-brand-primary transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Buscar modelos..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-brand-border rounded focus:outline-none focus:border-brand-primary transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.value] || Monitor;
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex items-center gap-2 px-6 py-2 rounded font-bold text-[11px] uppercase tracking-widest transition-all ${
                  isActive 
                    ? 'bg-brand-dark text-white ring-2 ring-brand-primary ring-offset-2' 
                    : 'bg-white text-brand-muted border border-brand-border hover:bg-brand-bg'
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-neutral-400 text-lg">No encontramos equipos que coincidan con tu búsqueda.</p>
            <button 
              onClick={() => {setActiveCategory('all'); setSearchTerm('');}}
              className="mt-4 text-brand-primary font-bold hover:underline"
            >
              Ver todos los equipos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:border-brand-primary transition-all card-shadow"
    >
      <div className="aspect-[16/10] bg-brand-bg relative overflow-hidden p-6 flex items-center justify-center">
        <Monitor size={60} className="text-brand-primary/20 group-hover:scale-110 group-hover:text-brand-primary/40 transition-all duration-700" />
        <div className="absolute top-3 left-3">
           <span className="px-2 py-0.5 bg-brand-dark text-[9px] font-black uppercase tracking-widest text-white rounded">
             {product.category}
           </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-extrabold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors truncate">
          {product.name}
        </h3>
        <p className="text-[13px] text-brand-muted mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
          {product.description}
        </p>
        <a 
          href="#cotizar"
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-brand-bg border border-brand-border rounded text-[11px] font-black uppercase tracking-widest text-brand-dark hover:bg-brand-dark hover:text-white transition-all"
        >
          Consultar Arriendo
        </a>
      </div>
    </motion.div>
  );
}
