import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Shield, Rocket, Monitor } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-widest rounded-full mb-6"
            >
              Continuidad Operativa Garantizada
            </motion.div>
            
            <h1 className="heading-xl mb-6 text-balance">
              Soluciones de <span className="text-brand-primary">Arriendo Tecnológico</span> Corporativo
            </h1>
            
            <p className="text-lg text-brand-muted mb-10 leading-relaxed max-w-xl text-balance">
              Equipamiento de última generación para oficinas, home office y eventos en Santiago de Chile. Notebooks, Apple, Pantallas LED y Soporte Express 24/7.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#cotizar"
                className="px-8 py-4 bg-brand-dark text-white rounded font-bold uppercase tracking-wider text-sm shadow-xl hover:bg-brand-primary transition-all"
              >
                Solicitar Cotización
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#equipos"
                className="px-8 py-4 bg-white text-brand-dark border border-brand-border rounded font-bold uppercase tracking-wider text-sm hover:bg-brand-bg transition-all"
              >
                Ver Catálogo
              </motion.a>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="border-l-2 border-brand-primary pl-4">
                <div className="font-extrabold text-2xl text-brand-dark">+15 Años</div>
                <div className="text-[12px] text-brand-muted uppercase font-bold tracking-wider">Experiencia</div>
              </div>
              <div className="border-l-2 border-brand-primary pl-4">
                <div className="font-extrabold text-2xl text-brand-dark">99.9%</div>
                <div className="text-[12px] text-brand-muted uppercase font-bold tracking-wider">Uptime Garantizado</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Visual Representation of Hardware */}
            <div className="relative z-10 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-neutral-900">
               <img 
                 src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1200" 
                 alt="Notebook y equipo tecnológico"
                 className="w-full h-full object-cover opacity-80"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="glass p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                          <Monitor size={20} />
                       </div>
                       <div>
                          <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Última Tecnología</p>
                          <p className="text-sm text-neutral-600">Modelos 2024 Disponibles</p>
                       </div>
                    </div>
                    <div className="flex -space-x-2">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Background elements for depth */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-primary rounded-3xl -z-0 opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
