"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  MapPin,
  Megaphone,
  Phone,
} from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import PageDecoration from "../components/PageDecoration";

const MAPS_URL =
  "https://www.google.com/maps/place/Platz+Caffe/@46.1007043,19.6640792,17z/data=!3m1!4b1!4m6!3m5!1s0x474367005daf07e1:0x758b9a3fcd52e28d!8m2!3d46.1007043!4d19.6640792!16s%2Fg%2F11zk57zppr?entry=ttu";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5!2d19.6615047!3d46.1007043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474367005daf07e1%3A0x758b9a3fcd52e28d!2sPlatz%20Caffe!5e0!3m2!1ssr!2srs!4v1710000000000!5m2!1ssr!2srs";

const contactBlocks = [
  {
    icon: MapPin,
    title: "Adresa",
    content: (
      <>
        <p className="text-lg font-light mb-2">Trg Cara Jovana Nenada 9, Subotica</p>
        <p className="text-lg font-light text-white/70 mb-4">
          Ulaz sa Trga Republike 10
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-medium group"
        >
          Otvori u Google Maps
          <ExternalLink
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </>
    ),
  },
  {
    icon: Clock,
    title: "Radno vreme",
    content: (
      <>
        <p className="text-lg font-light mb-1">Pon – Čet, Nedelja</p>
        <p className="text-xl font-medium mb-4">07:00 – 23:00</p>
        <p className="text-lg font-light mb-1">Petak – Subota</p>
        <p className="text-xl font-medium">07:00 – 00:00</p>
      </>
    ),
  },
  {
    icon: Phone,
    title: "Telefon i email",
    content: (
      <div className="space-y-3">
        <a
          href="tel:+381638024696"
          className="block text-lg font-light hover:text-gold transition-colors w-fit"
        >
          +381 63 802 4696
        </a>
        <a
          href="mailto:caffeplatz@gmail.com"
          className="block text-lg font-light hover:text-gold transition-colors w-fit"
        >
          caffeplatz@gmail.com
        </a>
      </div>
    ),
  },
  {
    icon: Megaphone,
    title: "Društvene mreže",
    content: (
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/caffeplatz/"
          aria-label="Platz na Instagramu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-green-accent transition-all duration-300"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/people/Platz-Caffe/61577870382643/"
          aria-label="Platz na Facebooku"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-green-accent transition-all duration-300"
        >
          <Facebook size={20} />
        </a>
      </div>
    ),
  },
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen md:pt-52 pt-32 pb-24 relative overflow-hidden bg-green-accent">
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[1000px] bg-yellow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[800px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <PageDecoration
        variant="wing-left"
        className="absolute top-40 left-[5%] w-40 opacity-10 rotate-12 hidden lg:block"
      />
      <PageDecoration
        variant="dots"
        className="absolute top-1/4 right-[10%] w-20 opacity-10"
      />
      <PageDecoration
        variant="diamond-outline"
        className="absolute bottom-1/3 left-[8%] w-16 opacity-10 rotate-45"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm uppercase tracking-widest font-medium">
              Nazad na početnu
            </span>
          </Link>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-4">
            Kontakt
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mb-8">
            Posetite nas u centru Subotice ili nas pozovite za rezervacije i
            događaje.
          </p>
          <div className="w-16 h-1 bg-gold mb-16" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {contactBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <FadeIn key={block.title} delay={150 + index * 80}>
                <div className="h-full p-8 rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm space-y-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Icon className="text-gold" size={22} />
                  </div>
                  <div>
                    <h2 className="font-bold uppercase tracking-widest text-xs text-beige/50 mb-4">
                      {block.title}
                    </h2>
                    <div className="text-white/90">{block.content}</div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={400}>
          <h2 className="font-display text-2xl md:text-3xl text-gold italic mb-6">
            Lokacija
          </h2>
          <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="Platz Caffe na mapi — Subotica"
              src={MAP_EMBED_URL}
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-6 text-center text-white/50 text-sm font-light">
            Na Trgu republike, u neposrednoj blizini Plave fontane i Gradske
            kuće.
          </p>
        </FadeIn>
      </div>
    </main>
  );
}
