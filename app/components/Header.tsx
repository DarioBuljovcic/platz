'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        { name: 'Naša priča', href: '#story' },
        { name: 'Meni', href: '#menu' },
        { name: 'Kontakt', href: '#contact' },
    ]

    return (
        <header className="sticky top-0 mt-2 w-full z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                {/* Brand */}
                <a href="#story" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-brown text-beige rounded-xl overflow-hidden flex items-center justify-center font-display font-bold text-2xl shadow-md group-hover:bg-brown-dark group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                        <Image src="/Logo.webp" alt="Logo" width={50} height={50} />
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="font-display font-semibold text-xl tracking-wide uppercase text-brown-dark m-0 leading-none">Platz</h1>
                        <p className="text-sm text-brown opacity-70 mt-1 tracking-widest uppercase text-[10px] font-semibold">Coffee Society</p>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link text-sm tracking-wide uppercase font-semibold">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden text-brown hover:text-green-accent transition-colors p-2"
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-beige/98 z-[60] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-8 right-8 text-brown hover:text-green-accent transition-colors p-2"
                    aria-label="Close Menu"
                >
                    <X size={32} />
                </button>

                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`font-display text-4xl text-brown hover:text-green-accent transition-all duration-300 uppercase tracking-widest ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="absolute bottom-12 text-center">
                    <p className="text-xs text-brown/40 uppercase tracking-[0.2em] font-medium">Platz © 2024</p>
                </div>
            </div>
        </header>
    )
}

export default Header