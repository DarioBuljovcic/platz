import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-brown-dark text-beige-dark py-8 px-6 md:px-12 border-t border-beige/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
                <p>&copy; {new Date().getFullYear()} Platz Coffee Society. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-yellow transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-yellow transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-yellow transition-colors">Careers</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer