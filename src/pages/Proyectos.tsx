import { motion } from 'motion/react';

const projects = [
  { id: 1, title: "Evento Corporativo Santiago", image: "https://images.unsplash.com/photo-1540575861501-7c0f110f6f87?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Configuración Home Office", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Montaje Video Wall", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Arriendo Laptops Capacitación", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Showroom Tecnología", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Soporte Técnico en Terreno", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
];

export default function Proyectos() {
  return (
    <div className="pt-24 min-h-screen bg-brand-bg">
      <div className="bg-brand-dark py-20 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">Nuestros Proyectos</h1>
          <p className="text-brand-muted max-w-2xl">
            Galería de instalaciones y servicios realizados. Visualice la calidad de nuestro despliegue tecnológico.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-brand-border bg-white"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
