// app/components/PartnersLine.tsx
import React from 'react';
import Image from 'next/image';

const partners = [
  { name: "Mixer", logo: "/logos/mixer.avif" },
  { name: "Gorki list", logo: "/logos/gorki_list.avif" },
  { name: "VodaVoda", logo: "/logos/vodavoda.avif" },
  { name: "LavAzza", logo: "/logos/lavazza.avif" },
  { name: "BeoStock", logo: "/logos/beostok.avif" },
  { name: "CocaCola", logo: "/logos/cola.avif" },
];

const PartnersLine = () => {
  return (
    <section className="py-12 bg-green-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="font-display text-xl text-gold/80 tracking-[0.2em] uppercase">
          Saradjujemo sa:
        </h2>
      </div>

      <div className="relative w-full">
        <div className="mask-fade-out">
          <div className="flex w-max animate-scroll whitespace-nowrap">
            {[0, 1, 2].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24"
                aria-hidden={copy === 1}
              >
                {partners.map((partner) => (
                  <div
                    key={`${copy}-${partner.name}`}
                    className="group flex min-w-[150px] shrink-0 flex-col items-center justify-center"
                  >
                    <div className="relative mb-4 flex h-24 w-24 justify-center opacity-40 transition-opacity duration-500 group-hover:opacity-100">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLine;
