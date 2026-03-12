import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function ContactSection() {
  return (
    <section id="contact" className="bg-green-accent pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative large P */}
      <div className="absolute top-0 right-12 text-[40vw] font-display font-bold text-white leading-none opacity-[0.03] select-none pointer-events-none">
        P
      </div>
      {/* Layered see-through circles */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-24">
            <h2 className="font-display text-6xl md:text-8xl mb-6 text-white font-bold">Platz Café</h2>
            <div className="w-16 h-1 bg-gold"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <FadeIn delay={100}>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-beige/50 mb-3">Adresa</h4>
                <p className="text-lg font-light mb-4">Trg Cara Jovana Nenada 9, Subotica
                </p>
                <a
                  href="https://www.google.com/maps/place/Platz+Caffe/@46.1007043,19.6640792,17z/data=!3m1!4b1!4m6!3m5!1s0x474367005daf07e1:0x758b9a3fcd52e28d!8m2!3d46.1007043!4d19.6640792!16s%2Fg%2F11zk57zppr?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-medium group"
                >
                  Pronađi nas na mapi
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Clock className="text-gold" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-beige/50 mb-3">Radno vreme</h4>
                <p className="text-lg font-light mb-1">Pon – Čet, Sub</p>
                <p className="text-xl font-medium mb-3">07:00 – 23:00</p>
                <p className="text-lg font-light mb-1">Petak, Nedelja</p>
                <p className="text-xl font-medium">07:00 – 00:00</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-beige/50 mb-3">Kontakt</h4>
                <div className="space-y-2">
                  <a href="tel:+381638024696" className="block text-lg font-light hover:text-yellow transition-colors relative group w-fit">
                    +381 63 8024696
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a href="mailto:caffeplatz@gmail.com" className="block text-lg font-light hover:text-yellow transition-colors relative group w-fit">
                    caffeplatz@gmail.com
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <Instagram className="text-gold" size={24} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs text-beige/50 mb-3">Društvene mreže</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/caffeplatz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-green-accent transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.facebook.com/people/Platz-Caffe/61577870382643/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-green-accent transition-all duration-300">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
