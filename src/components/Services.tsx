import { motion } from 'motion/react';
import { Truck, RotateCcw, Clock, ShieldCheck, Headphones, Zap, Phone } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto mb-20 text-center lg:text-left">
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
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
          >
            Mucho más que un simple <span className="text-brand-primary italic">arriendo</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-brand-muted text-lg leading-relaxed text-balance"
          >
            <p className="font-semibold text-brand-dark">
              Nos adaptamos a las necesidades de tu proyecto para garantizar el éxito y la satisfacción total.
            </p>
            <p>
              En Soporte 24 Horas, somos especialistas en el arriendo de soluciones tecnológicas para empresas, eventos y trabajo remoto en todo Chile. Nuestra misión es garantizar la continuidad operativa de su negocio mediante equipos de última generación y un soporte técnico ininterrumpido.
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 pt-4">
              <div>
                <h4 className="font-bold text-brand-dark mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" /> ¿Qué nos diferencia?
                </h4>
                <p className="text-sm">Nos enfocamos en entregar eficiencia y confianza a través de tres pilares fundamentales:</p>
                <ul className="mt-4 space-y-4">
                  <li>
                    <strong className="text-brand-dark block text-base">Tecnología de Vanguardia:</strong> 
                    <span className="text-sm">Contamos con un catálogo actualizado de notebooks, computadores, impresoras y soluciones visuales de alta gama (Smart TV 4K, pantallas LED P3/P4, monitores y proyectores de marcas líderes como LG, Samsung y Sony).</span>
                  </li>
                  <li>
                    <strong className="text-brand-dark block text-base">Continuidad Operativa:</strong> 
                    <span className="text-sm">Optimizamos sus costos y evitamos tiempos de inactividad. Ofrecemos soporte técnico en terreno y reemplazo inmediato de equipos, asegurando que su operación nunca se detenga.</span>
                  </li>
                  <li>
                    <strong className="text-brand-dark block text-base">Disponibilidad 24/7:</strong> 
                    <span className="text-sm">Nuestro servicio va más allá del alquiler. Brindamos asesoría profesional, asistencia remota y atención permanente las 24 horas del día, todos los días del año.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border">
              <h4 className="font-bold text-brand-dark mb-3 uppercase tracking-wide text-sm">Nuestro Compromiso</h4>
              <p className="text-base italic bg-white p-6 rounded-lg border-l-4 border-brand-primary card-shadow">
                "Sabemos que la imagen y el rendimiento son críticos para su éxito. Ya sea para una oficina, un evento corporativo o un proyecto de home office, en Soporte 24 Horas nos aseguramos de entregarle equipos uniformes, probados y listos para operar desde el primer minuto."
              </p>
              <p className="mt-6 font-bold text-brand-dark">Simplifique su gestión tecnológica: nosotros nos encargamos de que todo funcione.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
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

        {/* Contact Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 flex justify-center"
        >
          <a 
            href="tel:+56995791499" 
            className="flex items-center gap-4 px-10 py-5 bg-brand-primary text-white rounded-full font-black text-xl lg:text-2xl shadow-xl hover:scale-105 transition-all text-center tracking-tighter"
          >
            <Phone size={28} className="animate-pulse" />
            CONTÁCTANOS: +56 9 9579 1499
          </a>
        </motion.div>
      </div>
    </section>
  );
}
