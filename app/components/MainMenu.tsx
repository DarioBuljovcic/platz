"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";



export default function MainMenuSection() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const categories = [
        {
            id: 1,
            title: "Kafe i topli napici",
            description: "Savršen početak dana",
            image: "/images/espreso.avif",
            categorySlug: "kafe-i-topli-napici",
        },
        {
            id: 2,
            title: "Bezalkoholni napici",
            description: "Sveže i osvežavajuće",
            image: "/images/juice.avif",
            categorySlug: "bezalkoholni-napici",
        },
        {
            id: 3,
            title: "Alkoholna pića",
            description: "Piva, vina i žestina",
            image: "/images/viski.avif",
            categorySlug: "alkoholna-pica",
        },
        {
            id: 4,
            title: "Kokteli",
            description: "Klasični i autorski miksovi",
            image: "/images/martini.avif",
            categorySlug: "kokteli",
        },

    ];

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setActiveCard(null);
            }
        };

        const observerOptions = {
            threshold: 0.6, // Adjusted threshold for better selection
            rootMargin: "-20% 0px -20% 0px" // Narrower activation zone to focus on the center card
        };

        const observer = new IntersectionObserver((entries) => {
            // Only apply active card logic via observer on mobile/tablet
            if (window.innerWidth >= 1024) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"));
                    setActiveCard(index);
                }
            });
        }, observerOptions);

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        window.addEventListener('resize', handleResize);
        // Initial check
        handleResize();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="menu" className="bg-green-accent py-24 px-6 md:px-12 relative ">
            {/* Subtle decorative background light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header with Side Separators */}
                <div className="text-center flex flex-col items-center shrink-0 mb-20">
                    <FadeIn>
                        <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                            Naša Ponuda
                        </span>
                    </FadeIn>
                    <FadeIn delay={100}>
                        <h2 className="font-display text-4xl md:text-6xl text-white mb-8">
                            Istražite <span className="italic font-light text-brown">Cenovnik</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <p className="text-white/60 max-w-2xl text-lg font-light leading-relaxed">
                            Istražite našu pažljivo kreiranu ponudu. Svaki gutljaj je priča za sebe.
                        </p>
                    </FadeIn>
                </div>


                {/* Visual Categories Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

                    {categories.map((category, index) => (
                        <FadeIn
                            key={category.id}
                            delay={index * 100 + 300}
                        >
                            <div
                                ref={el => { cardRefs.current[index] = el; }}
                                data-index={index}
                                className="h-full"
                            >
                                <Link
                                    href={`/menu?cat=${category.categorySlug}`}
                                    className={`group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer block border border-white/5 transition-all duration-500 ${activeCard === index ? "ring-2 ring-gold/30 shadow-2xl shadow-gold/10" : "lg:hover:ring-2 lg:hover:ring-gold/30 lg:hover:shadow-2xl lg:hover:shadow-gold/10"
                                        }`}
                                >
                                    {/* Background Image with Hover/Active Zoom Effect */}
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className={`object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeCard === index ? "scale-110" : "group-hover:scale-110"
                                            }`}
                                    />

                                    {/* Dark Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-green-accent/90 via-green-accent/20 to-transparent transition-opacity duration-500 ${activeCard === index ? "opacity-90" : "opacity-40 group-hover:opacity-80"
                                        }`}></div>

                                    {/* Text Content inside the card */}
                                    <div className={`absolute bottom-0 left-0 p-8 w-full transform transition-all duration-500 ${activeCard === index ? "translate-y-0" : "translate-y-2 group-hover:translate-y-0"
                                        }`}>
                                        <h3 className="font-display text-2xl text-white mb-2 tracking-wide">
                                            {category.title}
                                        </h3>
                                        <div className="overflow-hidden">
                                            <p className={`text-gold flex items-center gap-2 transition-all duration-500 ${activeCard === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                                                }`}>
                                                <span className="text-sm font-medium uppercase tracking-wider">{category.description}</span>
                                                <span className="text-xl">&rarr;</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </FadeIn>
                    ))}

                </div>


                {/* Call to Action Button */}
                <FadeIn delay={100}>
                    <div className="flex justify-center">
                        <Link
                            href="/menu"
                            className="btn-primary"
                        >
                            Pogledaj ceo meni
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
