import React from 'react'
import Menu from '../components/Menu'
import { FadeIn } from '../components/FadeIn'
import { ChevronLeft } from 'lucide-react'
import ScrollToTop from '../components/ScrollToTop'
import { resolveMenuCategory } from '../lib/menu'
import Link from 'next/link'

type FullMenuPageProps = {
    searchParams?: Promise<{
        cat?: string | string[]
    }>
}

export default async function FullMenuPage({ searchParams }: FullMenuPageProps) {
    const resolvedSearchParams = await searchParams
    const { categories, activeSlug, activeData } = resolveMenuCategory(resolvedSearchParams?.cat)

    return (
        <main className="min-h-screen bg-green-accent md:pt-52 pt-32 pb-16">
            <ScrollToTop />
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <FadeIn>
                    <Link
                        href="/#menu"
                        className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors group mb-8"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Nazad na početnu
                    </Link>
                    <h1 className="font-display text-5xl md:text-7xl text-white mb-4">Kompletan Meni</h1>
                    <div className="w-20 h-1 bg-gold"></div>
                </FadeIn>
            </div>

            <Menu
                categories={categories}
                activeSlug={activeSlug}
                activeData={activeData}
            />
        </main>
    )
}
