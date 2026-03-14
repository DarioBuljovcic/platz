'use client'
import React from 'react'
import Menu from '../components/Menu'
import { FadeIn } from '../components/FadeIn'
import { ChevronLeft } from 'lucide-react'

export default function FullMenuPage() {
    return (
        <main className="min-h-screen bg-green-accent pt-52 pb-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <FadeIn>
                    <a
                        href="/#menu"
                        className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors group mb-8"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Nazad na početnu
                    </a>
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4">Kompletan Meni</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </FadeIn>
            </div>

            <Menu />
        </main>
    )
}
