'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div 
            className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-gold text-white shadow-lg hover:bg-gold-light transition-all duration-300 transform hover:scale-110 active:scale-95 group sm:p-4"
                aria-label="Scroll to top"
            >
                <ArrowUp 
                    size={24} 
                    className="group-hover:-translate-y-1 transition-transform" 
                />
            </button>
        </div>
    )
}
