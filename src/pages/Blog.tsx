import { motion } from 'motion/react';
import { BookOpen, Lightbulb, Cpu, Monitor } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Tips para elegir el Notebook corporativo ideal",
    category: "Tips",
    icon: Lightbulb,
    date: "05 Mayo, 2026",
    excerpt: "Descubra qué especificaciones técnicas son cruciales para la productividad de su equipo en 2024."
  },
  {
    id: 2,
    title: "Nueva tecnología de Pantallas LED P2",
    category: "Artefactos",
    icon: Monitor,
    date: "02 Mayo, 2026",
    excerpt: "Analizamos las ventajas de la resolución ultra fina para eventos corporativos de alto impacto."
  },
  {
    id: 3,
    title: "Optimización de flujos con MacBook Pro",
    category: "Hardware",
    icon: Cpu,
    date: "28 Abril, 2026",
    excerpt: "Potencie su área creativa con el rendimiento superior de los procesadores Apple M3."
  }
];

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-brand-bg">
      <div className="bg-brand-dark py-20 text-white">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">Blog Técnico</h1>
          <p className="text-brand-muted max-w-2xl mx-auto lg:mx-0">
             Artefactos de última generación, tips de productividad y novedades del mundo tecnológico.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Admin Tools - Mocked for visibility */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="p-6 bg-white border border-brand-border rounded-xl card-shadow">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-brand-primary" /> Gestión Admin
              </h3>
              <p className="text-xs text-brand-muted mb-4 uppercase tracking-wider font-bold">Autogestionable</p>
              <div className="space-y-4">
                <button className="w-full py-3 bg-brand-bg border border-brand-border rounded text-[11px] font-black uppercase tracking-widest text-brand-dark hover:bg-brand-dark hover:text-white transition-all">
                  Nueva Entrada
                </button>
                <button className="w-full py-3 bg-brand-bg border border-brand-border rounded text-[11px] font-black uppercase tracking-widest text-brand-dark hover:bg-brand-dark hover:text-white transition-all">
                  Subir Tips
                </button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-10">
            {posts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-xl border border-brand-border card-shadow flex flex-col md:flex-row gap-8 hover:border-brand-primary transition-all"
              >
                <div className="w-20 h-20 bg-brand-bg rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                   <post.icon size={32} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="px-2 py-0.5 bg-brand-dark text-[9px] font-black uppercase tracking-widest text-white rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-muted font-bold">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-brand-muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button className="text-sm font-black uppercase tracking-widest text-brand-primary hover:underline">
                    Leer más tips
                  </button>
                </div>
              </motion.article>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
