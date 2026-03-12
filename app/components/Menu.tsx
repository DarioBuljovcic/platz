'use client'
import React, { useState } from 'react'
import { FadeIn } from './FadeIn'
import menuData from '../data/menu.json'

const MenuItem = ({ item }: { item: any }) => (
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

const Subcategory = ({ sub, isFull = false }: { sub: any, isFull?: boolean }) => {
    const limit = 5;
    const hasMore = sub.items.length > limit;
    const initialItems = isFull ? sub.items : sub.items.slice(0, limit);

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-white/10 last:border-0">
            {/* Sidebar with Title and Image */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
                <div className="space-y-4">
                    <div className="w-12 h-px bg-gold"></div>
                    <h4 className="font-display text-3xl md:text-4xl text-brown leading-tight">
                        {sub.name}
                    </h4>
                </div>

                <div className="w-48 h-48 lg:w-full lg:aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group shadow-sm">
                    {sub.image ? (
                        <img src={sub.image} alt={sub.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/20 bg-white/[0.02]">
                            <svg className="w-16 h-16 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>

            {/* Menu Items List */}
            <div className="lg:col-span-8">
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-6">
                    {initialItems.map((item: any) => (
                        <MenuItem key={item.name} item={item} />
                    ))}
                </ul>

                {hasMore && !isFull && (
                    <div className="flex justify-start mt-8">
                        <a
                            href="/menu"
                            className="px-8 py-2.5 rounded-full border border-white/20 text-white hover:border-gold hover:text-gold transition-all text-sm font-medium hover:bg-gold/5 inline-block"
                        >
                            Pogledaj ceo meni
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

const Menu = ({ isFull = false }: { isFull?: boolean }) => {
    const [activeCategory, setActiveCategory] = useState(menuData[0].category);
    const activeData = (menuData.find(c => c.category === activeCategory) || menuData[0]) as any;

    return (
        <section id="menu" className="py-24 md:py-32 px-6 md:px-12 bg-green-accent/30 relative overflow-hidden flex justify-center">
            {/* Menu background elements */}

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-12 md:mb-14">
                        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Naša ponuda</span>
                        <h2 className="font-display text-6xl md:text-7xl text-brown-dark">Meni</h2>
                    </div>
                </FadeIn>

                {/* Categories Navigation */}
                <FadeIn delay={100}>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-20">
                        {menuData.map((category) => (
                            <button
                                key={category.category}
                                onClick={() => setActiveCategory(category.category)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 border ${activeCategory === category.category
                                    ? 'bg-gold text-green-accent border-gold shadow-md shadow-gold/20 transform -translate-y-1'
                                    : 'bg-transparent text-white border-white/20 hover:border-gold/50 hover:text-gold'
                                    }`}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Active Category Items */}
                <div key={activeCategory} className="animate-fade-in w-full">
                    <FadeIn delay={200}>
                        <div className="space-y-16">
                            {/* @ts-ignore */}
                            {activeData.subcategories ? activeData.subcategories.map((sub: any) => (
                                <Subcategory key={sub.name} sub={sub} isFull={isFull} />
                            )) : (
                                <div key="items">
                                    <ul className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-6">
                                        {/* @ts-ignore */}
                                        {activeData.items && (isFull ? activeData.items : activeData.items.slice(0, 10)).map((item: any) => (
                                            <MenuItem key={item.name} item={item} />
                                        ))}
                                    </ul>
                                    {!isFull && activeData.items && activeData.items.length > 10 && (
                                        <div className="flex justify-center mt-12">
                                            <a
                                                href="/menu"
                                                className="px-8 py-2.5 rounded-full border border-white/20 text-white hover:border-gold hover:text-gold transition-all text-sm font-medium hover:bg-gold/5"
                                            >
                                                Pogledaj ceo meni
                                            </a>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

export default Menu