import { motion } from 'motion/react';
import { Phone, Mail, ArrowRight, Zap, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SoporteExpress() {
  return (
    <div className="pt-24 min-h-screen bg-brand-bg">
      <div className="bg-brand-primary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight">Soporte Express</h1>
          <p className="text-white/90 text-xl max-w-2xl font-medium">
             Continuidad operativa total. Respuesta técnica inmediata y equipos de reemplazo en tiempo récord.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              Su operación nunca se detiene. <br />
              <span className="text-brand-primary underline decoration-brand-dark/10">Nosotros lo garantizamos.</span>
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              Nuestro servicio de Soporte Express está diseñado para empresas y eventos que no pueden permitirse ni un minuto de inactividad. Contamos con técnicos altamente capacitados listos para actuar.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: Zap, title: "Respuesta Inmediata", desc: "Atención remota en minutos y presencial en Santiago en tiempo récord." },
                { icon: Shield, title: "Garantía de Hardware", desc: "Si un equipo falla, lo reemplazamos por uno igual o superior de inmediato." },
                { icon: Target, title: "Expertos Certificados", desc: "Técnicos especialistas en hardware corporativo y configuración de eventos." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white border border-brand-border rounded-xl">
                  <div className="w-12 h-12 bg-brand-bg rounded flex items-center justify-center text-brand-primary flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-brand-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
             <div className="p-10 bg-brand-dark rounded-xl text-white card-shadow flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mb-6">
                   <Phone size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">WhatsApp Directo</h3>
                <p className="text-brand-muted mb-8 italic">Contáctenos ahora para soporte inmediato.</p>
                <a 
                  href="tel:+56977777777" 
                  className="w-full py-5 bg-white text-brand-dark rounded font-black text-2xl uppercase tracking-tighter hover:bg-brand-primary hover:text-white transition-all"
                >
                  +56 9 7777 7777
                </a>
             </div>

             <div className="p-10 bg-white border border-brand-border rounded-xl card-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-bg rounded-full flex items-center justify-center mb-6 text-brand-primary">
                   <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-6">Escríbanos</h3>
                <a 
                  href="mailto:contacto@soporte24horas.cl" 
                  className="text-lg font-bold text-brand-primary hover:underline mb-8"
                >
                  contacto@soporte24horas.cl
                </a>
                <Link 
                  to="/contacto"
                  className="px-10 py-4 bg-brand-dark text-white rounded font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-brand-primary transition-all"
                >
                  Ir a Cotizar
                  <ArrowRight size={18} />
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
