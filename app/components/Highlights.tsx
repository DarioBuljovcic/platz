import { Dog, Music, Sun, Sparkles } from 'lucide-react'
import { FadeIn } from './FadeIn'
import PageDecoration from './PageDecoration'

const Highlights = () => {
    const highlights = [
        {
            icon: Dog,
            title: "Pet Friendly",

        },
        {
            icon: Music,
            title: "Živa Muzika",

        },
        {
            icon: Sun,
            title: "Letnja Terasa",

        }
    ]

    return (
        <section className="py-20 bg-green-accent relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
                    {highlights.map((item, index) => (
                        <FadeIn key={index} delay={index * 150}>
                            <div className="flex flex-col items-center text-center space-y-6 group">
                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 transform group-hover:-translate-y-2">
                                    <item.icon size={36} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-display text-2xl text-white tracking-wide">{item.title}</h3>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Subtle decorative background light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    )
}

export default Highlights
