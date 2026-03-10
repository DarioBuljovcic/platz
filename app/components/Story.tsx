import React from 'react'
import { FadeIn } from './FadeIn'

const Story = () => {
    return (
        <section id="story" className="pt-32 pb-32 md:pt-48 md:pb-40 px-6 md:px-12 relative overflow-hidden">
            {/* Soft yellow glow */}
            <div className="absolute top-20 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-yellow/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            {/* Abstract see-through shapes */}
            <div className="hidden lg:block absolute top-40 left-10 w-64 h-64 border-[1px] border-brown/20 rounded-full -translate-x-1/2 pointer-events-none"></div>
            <div className="hidden lg:block absolute top-70 right-0 xl:right-10 w-64 h-64 border-[1px] border-brown/10 rounded-full -translate-x-1/2 pointer-events-none"></div>
            <div className="hidden lg:block absolute bottom-20 right-20 w-96 h-96 border-[1px] border-brown/10 rounded-[4rem] rotate-12 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                <div className="lg:col-span-7 space-y-16">
                    <FadeIn>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-brown-dark leading-[1.05] tracking-tight">
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
                        <div className="space-y-8 text-lg md:text-xl text-brown/70 font-light leading-relaxed max-w-xl">
                            <p className="text-2xl md:text-3xl text-brown mb-12 leading-tight">
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

                    <FadeIn delay={300}>
                        <div className="inline-flex items-center gap-4 bg-beige-soft/50 py-4 px-6 rounded-2xl border border-brown/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse"></div>
                            <span className="text-sm font-semibold tracking-widest uppercase text-brown/60">Tvoje svakodnevno mesto za predah</span>
                        </div>
                    </FadeIn>
                </div>

                <div className="lg:col-span-5 relative">
                    <FadeIn delay={400}>
                        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                                alt="Opuštena atmosfera kafića"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeIn>

                    <FadeIn delay={600} className="hidden md:block absolute -bottom-16 -left-16 w-3/5">
                        <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-beige">
                            <img
                                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
                                alt="Kvalitetna kafa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-40 text-center">
                <FadeIn>
                    <h2 className="font-display text-3xl md:text-4xl text-brown italic mb-8">
                        &quot;Verujemo da se dobri kafići grade na tri stvari — odličnoj kafi, ljubaznoj usluzi i atmosferi zbog koje poželiš da ostaneš malo duže.&quot;
                    </h2>
                    <p className="text-lg text-brown/70 font-light">
                        U Platzu se fokusiramo na kvalitetne sastojke, pažljivo pripremljena pića i prijatan ambijent koji je istovremeno moderan i blizak. Od jutarnjeg espressa do popodnevnog pića sa prijateljima, Platz je tvoje svakodnevno mesto za predah, druženje i punjenje baterija.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}

export default Story