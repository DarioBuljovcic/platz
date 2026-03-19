// app/components/PartnersLine.tsx
import React from 'react';
import Image from 'next/image';

const partners = [
  { name: "Mixer", logo: "/logos/mixer.png" },
  { name: "Gorki list", logo: "/logos/gorki_list.png" },
  { name: "VodaVoda", logo: "/logos/vodavoda.png" },
  { name: "LavAzza", logo: "/logos/lavazza.png" },
  { name: "BeoStock", logo: "/logos/beostok.png" },
];

const PartnersLine = () => {
  // Triple the partners array to ensure a seamless loop
  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-green-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="font-display text-xl text-gold/80 tracking-[0.2em] uppercase">
          Saradjujemo sa:
        </h2>
      </div>

      <div className="relative w-full">
        {/* Fading Sides Overlay */}
        <div className="mask-fade-out">
          <div className="flex w-fit animate-scroll whitespace-nowrap">
            {displayPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-8 md:mx-16 min-w-[150px] group"
              >
                {/* Logo Placeholder - User will add src later */}
                <div className="w-24 h-24 mb-4 relative opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-white/80 font-display text-lg tracking-wide group-hover:text-gold transition-colors duration-500">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLine;
