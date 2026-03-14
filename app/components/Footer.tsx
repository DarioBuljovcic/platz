import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-green-accent/50 text-white/80 py-8 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
                <p>&copy; {new Date().getFullYear()} Platz - Zajednica ljubitelja kafe. Sva prava zadržana.</p>
                <div className="flex gap-6">
                    <a href="/politika-privatnosti" className="hover:text-yellow transition-colors">Politika privatnosti</a>
                    <a href="/uslovi-koriscenja" className="hover:text-yellow transition-colors">Uslovi korišćenja</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer