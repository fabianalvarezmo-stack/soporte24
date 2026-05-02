import { motion } from 'motion/react';
import { Truck, RotateCcw, Clock, ShieldCheck, Headphones, Zap } from 'lucide-react';

export default function Services() {
  const values = [
    {
      icon: Clock,
      title: "Respuesta Inmediata",
      desc: "Soporte técnico Express y equipos de reemplazo inmediato para mantener tu operación."
    },
    {
      icon: ShieldCheck,
      title: "Garantía de Calidad",
      desc: "Equipos corporativos de las mejores marcas, revisados y actualizados antes de cada entrega."
    },
    {
      icon: Zap,
      title: "Eficiencia de Costos",
      desc: "Ahorra en adquisición y mantenimiento. Pagas solo por el tiempo que usas el equipo."
    },
    {
      icon: Truck,
      title: "Logística Nacional",
      desc: "Despacho y retiro en tus oficinas o lugar de evento en todo Santiago y regiones."
    },
    {
      icon: RotateCcw,
      title: "Actualización Continua",
      desc: "Accede siempre a la última tecnología sin depreciación de activos propios."
    },
    {
      icon: Headphones,
      title: "Mesa de Ayuda",
      desc: "Asistencia técnica remota y presencial dedicada durante todo el periodo de arriendo."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
          >
            Nuestros Pilares
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Mucho más que un simple <span className="text-brand-primary italic">arriendo</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 text-lg"
          >
            Nos adaptamos a las necesidades de tu proyecto para garantizar el éxito y la satisfacción total.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-brand-border rounded-lg group hover:border-brand-primary transition-all card-shadow"
            >
              <div className="w-12 h-12 text-brand-primary transition-all mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-brand-dark uppercase tracking-tight">{item.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
