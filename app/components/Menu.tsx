'use client'
import React from 'react'
import Link from 'next/link'
import { FadeIn } from './FadeIn'
import Image from 'next/image'
import type { MenuCategoryData, MenuItem as MenuItemType, MenuSubcategory } from '../lib/menu'

type CategoryNavItem = {
    label: string
    slug: string
}

type MenuProps = {
    categories: CategoryNavItem[]
    activeSlug: string
    activeData: MenuCategoryData
}

const MenuItem = ({ item }: { item: MenuItemType }) => (
    <li className="flex gap-4 md:gap-5 items-center group">
        <div className="flex-1 py-0.5">
            <div className="flex justify-between items-end gap-2 md:gap-4 mb-1 text-wrap">
                <span className="font-display text-base md:text-lg text-brown group-hover:text-gold transition-colors leading-tight">{item.name}</span>
                <span className="hidden sm:block flex-1 border-b-2 border-dotted border-brown/20 relative -top-1.5 mx-2 shrink"></span>
                <span className="font-display text-sm md:text-base font-medium text-brown whitespace-nowrap">{item.price}</span>
            </div>
            {item.desc && <p className="text-[10px] md:text-xs text-brown/60 font-light leading-relaxed">{item.desc}</p>}
        </div>
    </li>
)

const SpecialMenuItem = ({ item }: { item: MenuItemType }) => (
    <li className="flex gap-4 md:gap-5 items-start group transition-all duration-300 bg-gold/5 p-4 rounded-2xl border border-gold/20 shadow-sm">
        {item.image && (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 border border-gold/30 shadow-sm relative">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
        )}
        <div className="flex-1 py-0.5">
            <div className="flex justify-between items-end gap-2 md:gap-4 mb-1 text-wrap">
                <div className="flex flex-col w-full">
                    <span className="font-display w-full text-base md:text-lg text-brown group-hover:text-gold transition-colors leading-tight flex items-start gap-2">
                        <p>{item.name}</p>
                        <span className="text-[9px] uppercase tracking-widest bg-gold text-green-accent px-2 py-0.5 mt-1 rounded-full font-bold shadow-sm">
                            Special
                        </span>
                    </span>
                    <div className='flex justify-between items-center gap-2 md:gap-4 mb-1 text-wrap'>
                        {item.desc && <p className="text-[10px] md:text-xs text-brown/60 font-light leading-relaxed">{item.desc}</p>}
                        <span className="font-display text-sm md:text-base font-medium text-brown whitespace-nowrap">{item.price}</span>
                    </div>
                </div>
            </div>
            {item.longDesc && (
                <p className="text-[11px] md:text-[13px] text-brown-dark/80 font-normal leading-relaxed mt-3 italic border-l-2 border-gold/40 pl-4 py-1">
                    {item.longDesc}
                </p>
            )}
        </div>
    </li>
)

const ItemRenderer = ({ item }: { item: MenuItemType }) => {
    if (item.image || item.longDesc) {
        return <span className="md:hidden"><SpecialMenuItem item={item} /></span>;
    }
    return <MenuItem item={item} />
}

const Subcategory = ({ sub }: { sub: MenuSubcategory }) => {
    const specialItems = (sub.sections
        ? sub.sections.flatMap((s) => s.items)
        : (sub.items || [])).filter((item) => item.image || item.longDesc);

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-white/10 last:border-0">
            {/* Sidebar with Title and Image */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
                <div className="space-y-4">
                    <div className="w-12 h-px bg-gold"></div>
                    <h3 className="font-display text-3xl md:text-4xl text-brown leading-tight">
                        {sub.name}
                    </h3>
                </div>

                {sub.image && (
                    <div className="w-48 h-48 lg:w-full lg:aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group shadow-sm">

                        <Image
                            src={sub.image}
                            alt={sub.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                    </div>
                )}

                {specialItems.length > 0 && (
                    <div className="space-y-4 hidden md:block">
                        <ul className="space-y-4">
                            {specialItems.map((item) => (
                                <SpecialMenuItem key={item.name} item={item} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Menu Items List */}
            <div className="lg:col-span-8">
                {sub.sections ? (
                    <div className="space-y-12">
                        {sub.sections.map((section) => (
                            <div key={section.title} className="animate-fade-in">
                                <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3 opacity-80">
                                    <span className="w-6 h-px bg-gold/30"></span>
                                    {section.title}
                                </h4>
                                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-6">
                                    {section.items.map((item) => (
                                        <ItemRenderer key={item.name} item={item} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-6">
                        {sub.items?.map((item) => (
                            <ItemRenderer key={item.name} item={item} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const Menu = ({ categories, activeSlug, activeData }: MenuProps) => {
    return (
        <section id="menu" className="py-24 md:py-32 px-6 md:px-12 bg-green-accent/30 relative overflow-hidden flex justify-center">
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-12 md:mb-14">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Naša ponuda</span>
                        <h2 className="font-display text-6xl md:text-7xl text-brown-dark">Cenovnik</h2>
                    </div>
                </FadeIn>

                {/* Categories Navigation */}
                <FadeIn delay={100}>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-20">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/menu?cat=${category.slug}`}
                                scroll={false}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 border ${activeSlug === category.slug
                                    ? 'bg-gold text-green-accent border-gold shadow-md shadow-gold/20 transform -translate-y-1'
                                    : 'bg-transparent text-white border-white/20 hover:border-gold/50 hover:text-gold'
                                    }`}
                            >
                                {category.label}
                            </Link>
                        ))}
                    </div>
                </FadeIn>

                {/* Active Category Items */}
                <div key={activeSlug} className="animate-fade-in w-full">
                    <FadeIn delay={200}>
                        <div className="space-y-16">
                            {activeData.subcategories ? activeData.subcategories.map((sub) => (
                                <Subcategory key={sub.name} sub={sub} />
                            )) : (
                                <div key="items">
                                    <ul className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-6">
                                        {activeData.items?.map((item) => (
                                            <ItemRenderer key={item.name} item={item} />
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Menu;
