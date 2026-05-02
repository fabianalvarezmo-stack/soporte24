import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, User, Mail, Phone, Calendar, Hash, FileText, Monitor, Clock, Shield } from 'lucide-react';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const equipmentOptions = [
    "Arriendo Notebook", "Arriendo Computador", "Arriendo MacBook", 
    "Arriendo Pantalla LED TV", "Arriendo Pantalla Touch", "Arriendo Proyector",
    "Arriendo Impresora", "Arriendo VideoWall"
  ];

  if (submitted) {
    return (
      <section id="cotizar" className="py-24 animate-in fade-in duration-700">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-brand-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <CheckCircle2 size={200} />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">¡Cotización Recibida!</h2>
              <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
                Hemos recibido tu solicitud. Un ejecutivo se contactará contigo en menos de 2 horas hábiles.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-white text-brand-primary rounded-full font-bold hover:scale-105 transition-transform"
              >
                Enviar otra solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizar" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Solicita tu <span className="text-brand-primary">Cotización</span></h2>
            <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
              Completa el formulario y recibe una propuesta adaptada a tus necesidades operativas y presupuesto. Somos expertos en soluciones IT para empresas y eventos.
            </p>

            <div className="space-y-6">
              {[
                { icon: User, title: "Gestión Personalizada", desc: "Un ejecutivo asignado resolverá todas tus dudas técnicos." },
                { icon: Shield, title: "Continuidad Operativa", desc: "Equipos de reemplazo inmediato en caso de fallas." },
                { icon: Clock, title: "Soporte Express", desc: "Respuesta técnica en terreno en tiempo récord." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{item.title}</h4>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-neutral-900 rounded-[2rem] text-white">
               <p className="text-sm text-neutral-400 uppercase tracking-widest font-bold mb-2">Contacto Directo</p>
               <div className="text-2xl font-bold mb-2">contacto@soporte24horas.cl</div>
               <div className="text-brand-primary">+56 9 7777 7777</div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-xl card-shadow border border-brand-border"
          >
            <h3 className="text-xl font-extrabold text-brand-dark border-l-4 border-brand-primary pl-4 mb-8">Cotización Inmediata</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold text-brand-muted uppercase tracking-widest">
                  Nombre / Empresa
                </label>
                <input required type="text" className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded focus:border-brand-primary focus:ring-0 outline-none text-sm" placeholder="Ej: Juan Pérez / Empresa LTDA" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-brand-muted uppercase tracking-widest">
                  Correo Electrónico
                </label>
                <input required type="email" className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded focus:border-brand-primary focus:ring-0 outline-none text-sm" placeholder="contacto@empresa.cl" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-brand-muted uppercase tracking-widest">
                  Teléfono
                </label>
                <input required type="tel" className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded focus:border-brand-primary focus:ring-0 outline-none text-sm" placeholder="+56 9 1234 5678" />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold text-brand-muted uppercase tracking-widest">
                  Tipo de Equipo
                </label>
                <select required className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded focus:border-brand-primary focus:ring-0 outline-none text-sm appearance-none">
                  <option value="">Selecciona una opción</option>
                  {equipmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold text-brand-muted uppercase tracking-widest">
                  Cantidad y Periodo
                </label>
                <input required type="text" className="w-full px-4 py-3 bg-brand-bg border border-brand-border rounded focus:border-brand-primary focus:ring-0 outline-none text-sm" placeholder="Ej: 10 unidades x 5 días" />
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 bg-brand-dark text-white rounded font-bold uppercase tracking-widest text-xs hover:bg-brand-primary transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                  ) : (
                    "Solicitar Cotización"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
