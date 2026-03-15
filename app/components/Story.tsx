import React from 'react'
import { FadeIn } from './FadeIn'
import Image from 'next/image'
import PageDecoration from './PageDecoration'

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
                <div className="lg:col-span-7 space-y-16">
                    <FadeIn>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight">
                            Uspori, <br />
                            <span className="italic font-light text-brown">druži se</span> i <span className="font-medium">uživaj.</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a href="#menu" className="btn-primary">Pogledaj meni</a>
                            <a href="#contact" className="btn-outline">Pronađi nas</a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl">
                            <p className="text-2xl md:text-3xl text-white mb-12 leading-tight">
                                <span className="font-semibold">Platz</span> je više od mesta za kafu — to je mesto gde uživaš u trenutku.
                            </p>
                            <p>
                                Nastao sa idejom da donese opuštenu kafe kulturu u komšiluk, Platz spaja kvalitetnu kafu, prijatnu atmosferu i prostor u kojem se svi osećaju prijatno.
                            </p>
                            <p>
                                Bilo da se družiš sa prijateljima, radiš na laptopu ili jednostavno praviš pauzu, naš cilj je jednostavan: da svaka poseta bude opuštena i prijatna.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="lg:col-span-5 relative">
                    <FadeIn delay={300}>
                        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                                alt="Opuštena atmosfera kafića"
                                className="w-full h-full object-cover"
                                width={600}
                                height={600}
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={400} className="hidden md:block absolute -bottom-16 -left-16 w-3/5">
                        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-green-accent">
                            <Image
                                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
                                alt="Kvalitetna kafa"
                                className="w-full h-full object-cover"
                                width={400}
                                height={400}
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-40 text-center">
                <FadeIn>
                    <h2 className="font-display text-3xl md:text-4xl text-white italic mb-8">
                        &quot;Otkako smo otvorili svoja vrata u Maju 2025. godine, naš cilj je bio da unesemo autentičnu energiju i opušteni duh na Trg Cara Jovana Nenada.&quot;
                    </h2>
                    <p className="text-lg text-white/70 font-light">
                        Platz je mesto gde se dobra kafa sreće sa živom akustičnom muzikom i opuštenom atmosferom naše bašte. Bilo da svraćate na jutarnji espresso, popodnevni smoothie ili večernji koktel uz žive svirke, ovde ste uvek dobrodošli — baš kao i vaši ljubimci, jer smo s ponosom pet-friendly komšijsko mesto.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}

export default Story