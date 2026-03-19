"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface Review {
    id: number;
    name: string;
    review: string;
}

const REVIEWS: Review[] = [
    {
        id: 1,
        name: "Olga Andric",
        review: "Ubedljivo najudobniji kafić u Subotici sa dobrom kafom!❤️",
    },
    {
        id: 2,
        name: "Tihomir Piukovity",
        review: "Najlepše mesto u gradu, iskreno čista 10tka",
    },
    {
        id: 3,
        name: "Dario Buljovčić",
        review: "Baš lepo mesto, ušuškano, dobra kafa, prijatna atmosfera, nekako sve na mestu...bravo",
    },
];

export default function RotatingReviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === REVIEWS.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    // Auto-rotate every 6 seconds, paused on hover
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(nextSlide, 6000);

        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <section className="bg-[var(--green-accent)] py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
                            Utisci naših gostiju
                        </h2>
                        <p className="text-3xl md:text-5xl font-bold">
                            Šta drugi kažu o nama
                        </p>
                    </div>
                </FadeIn>
                {/* Reviews Container */}
                <FadeIn delay={.1}>
                    <div
                        className="relative min-h-[350px] md:min-h-[280px] flex items-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {REVIEWS.map((item, index) => (
                            <figure
                                key={item.id}
                                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${index === currentIndex
                                    ? "opacity-100 scale-100 translate-y-0 z-10"
                                    : "opacity-0 scale-95 translate-y-8 -z-10 pointer-events-none"
                                    }`}
                            >
                                {/* Quote Icon */}
                                <div className="mb-8 text-gold/30">
                                    <Quote size={48} strokeWidth={1} />
                                </div>

                                {/* Review Text */}
                                <blockquote className="text-xl md:text-3xl font-medium text-beige italic mb-10 leading-relaxed max-w-3xl">
                                    &ldquo;{item.review}&rdquo;
                                </blockquote>

                                {/* Reviewer Info */}
                                <figcaption className="flex flex-col items-center">
                                    <cite className="not-italic">
                                        <span className="block text-lg font-bold text-white mb-1">
                                            {item.name}
                                        </span>
                                    </cite>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-12 space-x-4">
                        {REVIEWS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                    ? "bg-gold w-8"
                                    : "bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}