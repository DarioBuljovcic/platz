'use client'

import React from 'react'
import { FadeIn } from '../components/FadeIn'
import PageDecoration from '../components/PageDecoration'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Separator from '../components/Separator'

export default function AboutUsPage() {
    return (
        <main className="min-h-screen md:pt-52 pt-32 pb-24 relative overflow-hidden bg-green-accent">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[1000px] bg-yellow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[800px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            {/* Decorative SVGs */}
            <PageDecoration variant="wing-left" className="absolute top-40 left-[5%] w-40 opacity-10 rotate-12 hidden lg:block" />
            <PageDecoration variant="wing-right" className="absolute bottom-40 right-[5%] w-40 opacity-10 -rotate-12 hidden lg:block" />
            <PageDecoration variant="dots" className="absolute top-1/4 right-[10%] w-20 opacity-10" />
            <PageDecoration variant="diamond-outline" className="absolute bottom-1/4 left-[10%] w-16 opacity-10 rotate-45" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm uppercase tracking-widest font-medium">Nazad na početnu</span>
                    </Link>
                </FadeIn>

                <FadeIn delay={100}>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
                        Više od kafe - <br />
                        <span className="italic font-light text-gold">Priča o Cafe Platz-u</span>
                    </h1>
                </FadeIn>

                <div className="space-y-16 mt-16">
                    <FadeIn delay={200}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 text-lg md:text-xl text-white/80 font-light leading-relaxed">
                                <p>
                                    Platz Caffe nastao je iz poštovanja prema kafi, arhitekturi i gradskom ritmu Subotice.
                                </p>
                                <p>
                                    U Platz Caffe-u gost nije samo prolaznik, već deo atmosfere. Mesto gde se dolazi da bi se ostalo, razgovaralo i posmatrao grad sa uživanjem.
                                </p>
                            </div>
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
                                    alt="Ambijent Cafe Platz"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto py-6">
                            <Separator />
                            <div className="space-y-6">
                                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold italic">Ukusi istorije</h2>
                                <p className="text-xl md:text-xl text-white/80 font-light leading-relaxed">
                                    Ponosni smo što naš kafić živi u zgradi koja je zaštićeno kulturno dobro. Kod nas kafa ima ukus istorije.
                                </p>
                                <p className="text-md text-white/60 font-light uppercase tracking-[0.2em]">
                                    Neraskidivo vezan za Trg republike
                                </p>
                            </div>
                            <Separator />
                        </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="grid md:grid-cols-1 gap-12 items-center">
                            <div className="order-2 md:order-1 relative aspect-[2] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="/images/building.avif"
                                    alt="Pogled na Suboticu"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="order-2 space-y-6 text-lg md:text-xl text-white/80 font-light leading-relaxed">
                                <p>
                                    Na Trgu Republike 10 stoji jedna od najstarijih spratnica u Subotici još krajem 18. veka na ovom mestu postojao je spratni objekat, što je bila prava redkost u gradu punom prizemnih kuća.
                                </p>
                                <p>
                                    Oko 1800. godine podigao ga je Jakov Lančarević pripadnik ugledne porodice koja je 1779. godine stekla status građana tek oslobođene Subotice. Tokom narednih vekova kuća je prelazila u ruke značajnih porodica, sve do trgovca Dušana Stojkovića, koji joj je 1907. godine dao današnji secesijski izgled sa tornjom, erkerom i elegantim balkonom od kovanog gvožđa.
                                </p>
                                <p>
                                    U prizemlju su se smenjivali dućani i kafane, među njima i čuveni "Biser" sa jednom od najlepših bašti u centru grada. Danas kao zaštićeno kulturno dobro, ova zgrada čuva više od dva veka subotičke istorije i pruža dom Cafe Platzu.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={200} className="mt-24 text-center">
                    <Link href="/#menu" className="btn-primary px-12">Istraži naš meni</Link>
                </FadeIn>
            </div>
        </main>
    )
}
