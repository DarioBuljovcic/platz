'use client'
import { Menu, X, MapPin, Phone, Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)

    // Scroll listener to detect if user is at the top
    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 40)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const navLinks = [
        { name: 'Početna', href: '/' },
        { name: 'Naša priča', href: '/o-nama' },
        { name: 'Meni', href: '/menu' },
        { name: 'Kontakt', href: '/kontakt' },
    ]

    return (
        <header className={`glass-nav fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isAtTop ? 'pt-4' : 'pt-0'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Info Bar - Visible only when at top */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out hidden md:block ${isAtTop ? 'max-h-12 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
                    <div className="flex justify-between items-center py-2 px-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[11px] uppercase tracking-[0.15em] font-medium text-white/60">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 hover:text-gold transition-colors">
                                <MapPin size={12} className="text-gold" />
                                <Link href="https://www.google.com/maps/place/Platz+Caffe/@46.1007043,19.6640792,17z/data=!3m1!4b1!4m6!3m5!1s0x474367005daf07e1:0x758b9a3fcd52e28d!8m2!3d46.1007043!4d19.6640792!16s%2Fg%2F11zk57zppr?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                    Trg Cara Jovana Nenada 9, Subotica
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={12} className="text-gold" />
                                <a href="tel:+381638024696" className="hover:text-gold transition-colors">+381 63 8024696</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                            <a href="https://instagram.com/caffeplatz" aria-label="Platz on Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                                <Instagram size={14} />
                            </a>
                            <a href="https://facebook.com/caffeplatz" aria-label="Platz on Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                                <Facebook size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Header */}
                <div className={` h-20 md:h-24 px-6 md:px-10 flex items-center justify-between transition-all duration-500 `}>
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 text-gold rounded-xl overflow-hidden flex items-center justify-center font-display font-bold text-2xl shadow-md group-hover:bg-white/10 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 border border-white/10">
                            <Image src="/Logo.webp" alt="Logo" width={50} height={50} priority fetchPriority='high' />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="font-display font-semibold text-lg md:text-xl tracking-wide uppercase text-white m-0 leading-none">Platz</h1>
                            <p className="text-[9px] md:text-[10px] text-white/70 mt-1 tracking-widest uppercase font-semibold">Zajednica ljubitelja kafe</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="nav-link text-xs tracking-widest uppercase font-bold text-white/80 hover:text-gold transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Nav Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden text-white hover:text-gold transition-colors p-2"
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] h-[100vh] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden bg-green-accent/95 backdrop-blur-xl ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-9 text-white hover:text-gold transition-colors p-2"
                    aria-label="Close Menu"
                >
                    <X size={32} />
                </button>

                <div className="flex flex-col items-center justify-center w-full max-w-sm px-6 gap-12">
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`font-display text-4xl text-white hover:text-gold transition-all duration-300 uppercase tracking-widest ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className={`flex flex-col items-center gap-8 transition-all duration-500 delay-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex flex-col items-center gap-3 text-white/60 text-sm font-light text-center">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-gold shrink-0" />
                                <Link href="https://www.google.com/maps/place/Platz+Caffe/@46.1007043,19.6640792,17z/data=!3m1!4b1!4m6!3m5!1s0x474367005daf07e1:0x758b9a3fcd52e28d!8m2!3d46.1007043!4d19.6640792!16s%2Fg%2F11zk57zppr?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" >Trg Cara Jovana Nenada 9, Subotica</Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-gold shrink-0" />
                                <a href="tel:+381638024696" className="hover:text-gold transition-colors">+381 63 802 4696</a>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <a href="https://instagram.com/caffeplatz" aria-label="Platz on Instagram" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all bg-white/5">
                                <Instagram size={24} />
                            </a>
                            <a href="https://facebook.com/caffeplatz" aria-label="Platz on Facebook" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all bg-white/5">
                                <Facebook size={24} />
                            </a>
                        </div>

                        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">Platz © 2026</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
