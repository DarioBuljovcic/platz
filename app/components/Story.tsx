import React from 'react'
import { FadeIn } from './FadeIn'
import Image from 'next/image'
import PageDecoration from './PageDecoration'
import Separator from './Separator'

const Story = () => {
    return (
        <section id="story" className="pt-32 pb-32 md:pt-48 md:pb-40 px-6 md:px-12 relative overflow-hidden">
            {/* Soft yellow glow */}
            <div className="absolute top-20 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-yellow/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            {/* Abstract see-through shapes */}
            <div className="hidden lg:block absolute top-40 left-10 w-64 h-64 border-[1px] border-white/10 rounded-full -translate-x-1/2 pointer-events-none"></div>
            <div className="hidden lg:block absolute top-70 right-0 xl:right-10 w-64 h-64 border-[1px] border-white/5 rounded-full -translate-x-1/2 pointer-events-none"></div>
            <div className="hidden lg:block absolute bottom-20 right-20 w-96 h-96 border-[1px] border-white/5 rounded-[4rem] rotate-12 pointer-events-none"></div>

            {/* Decorative SVGs */}
            <PageDecoration variant="wing-left" className="hidden lg:block absolute top-20 left-10 w-32 rotate-12" opacity={0.2} />
            <PageDecoration variant="wing-right" className="absolute bottom-40 right-10 w-32 -rotate-12" opacity={0.15} />
            <PageDecoration variant="diamond" className="absolute top-1/2 left-[5%] w-8 rotate-45" opacity={0.2} />
            <PageDecoration variant="diamond-outline" className="absolute top-1/3 right-[10%] w-12 rotate-12" opacity={0.1} />
            <PageDecoration variant="dots" className="absolute bottom-20 left-1/4 w-16" opacity={0.15} />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                <div className="lg:col-span-6 space-y-16">
                    <FadeIn>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
                            Vaš kutak za dobru kafu
                        </h1>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a href="#menu" className="btn-outline">Pogledaj meni</a>
                            <a href="#contact" className="btn-primary">Pronađi nas</a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="space-y-8 text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl">
                            <p className="text-xl md:text-2xl text-white mb-12 leading-tight">
                                <span className="font-semibold">Platz</span> je više od mesta za kafu to je mesto gde uživaš u trenutku.
                            </p>
                            <p>
                                Smešten u jednoj od najstarijih zgrada na Trgu Republike, naš kafić čuva duh stare Subotice pod secesijskim tornjićima koji decenijama krase centar grada.
                            </p>

                        </div>
                    </FadeIn>
                </div>

                <div className="lg:col-span-6 relative">
                    <FadeIn delay={300}>
                        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative">
                            <Image
                                src="/images/inner.avif"
                                alt="Opuštena atmosfera kafića"
                                className="object-cover object-[50%_20%]"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={400} className="hidden md:block absolute md:-bottom-16 -right-16 w-2/3">
                        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-green-accent relative">
                            <Image
                                src="/images/closeup.avif"
                                alt="Kvalitetna kafa"
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-40 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                <div className="lg:col-span-12 xl:col-span-7">
                    <FadeIn>
                        <div className="aspect-[16/9] md:aspect-[21/9] xl:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/people.avif"
                                alt="Subotica arhitektura"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={800}
                            />
                        </div>
                    </FadeIn>
                </div>
                <div className="lg:col-span-12 xl:col-span-5 space-y-8">
                    <FadeIn delay={100}>
                        <h2 className="font-display text-2xl md:text-3xl text-white italic">
                            Sa pogledom na Plavu fontanu i dostojanstvenu siluetu Gradske kuće, ovde se vreme ne meri minutima, već trenucima.
                        </h2>
                        <div className="mt-8">
                            <a href="/o-nama" className="btn-primary">Saznaj više o nama</a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

export default Story