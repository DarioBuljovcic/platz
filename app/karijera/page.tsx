import { FadeIn } from "../components/FadeIn";

export default function Careers() {
  return (
    <main className="min-h-screen bg-beige pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="font-display text-5xl md:text-7xl mb-12 text-brown">Karijera</h1>
          <div className="w-16 h-1 bg-yellow mb-12"></div>
          
          <div className="prose prose-lg text-brown font-light space-y-8">
            <p className="text-xl italic">
              Postani deo Platz Coffee Society tima. Verujemo da su ljudi duša našeg kafića.
            </p>

            <section>
              <h2 className="text-3xl font-display mb-6 text-brown">Zašto Platz?</h2>
              <p>
                Nudimo dinamično radno okruženje, profesionalni razvoj i priliku da učiš od najboljih barista. Ako voliš kafu, druženje i želiš da pružiš gostima vrhunsko iskustvo, na pravom si mestu.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display mb-6 text-brown">Otvorene pozicije</h2>
              <div className="space-y-6">
                <div className="p-6 border border-brown/10 rounded-lg hover:border-yellow transition-colors bg-white/50">
                  <h3 className="text-xl font-bold mb-2">Barista</h3>
                  <p className="mb-4">Strast prema kafi i želja za stalnim usavršavanjem veština pripreme napitaka.</p>
                  <span className="text-sm font-medium text-yellow uppercase tracking-widest">Prijave su uvek otvorene</span>
                </div>
                
                <div className="p-6 border border-brown/10 rounded-lg hover:border-yellow transition-colors bg-white/50">
                  <h3 className="text-xl font-bold mb-2">Konobar</h3>
                  <p className="mb-4">Ljubaznost, brzina i sposobnost rada u dinamičnom okruženju sa osmehom.</p>
                  <span className="text-sm font-medium text-yellow uppercase tracking-widest">Prijave su uvek otvorene</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display mb-6 text-brown">Kako se prijaviti?</h2>
              <p>
                Pošalji nam svoj CV i kratku poruku o tome zašto bi želeo da radiš u Platz-u na adresu: 
                <a href="mailto:careers@platzcafe.com" className="text-yellow font-medium ml-1 hover:underline">careers@platzcafe.com</a>
              </p>
              <p className="mt-4">
                Ili svrati do nas na kafu i donesi svoju biografiju lično!
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
