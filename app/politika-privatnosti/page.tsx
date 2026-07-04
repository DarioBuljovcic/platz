import type { Metadata } from "next";
import { FadeIn } from "../components/FadeIn";
import { createPageMetadata, siteConfig } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Politika privatnosti",
  description:
    "Politika privatnosti Platz Caffea — kako štitimo vaše podatke prilikom korišćenja našeg veb-sajta.",
  path: "/politika-privatnosti",
  noIndex: true,
});

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-beige pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="font-display text-5xl md:text-7xl mb-12 text-brown">Politika privatnosti</h1>
          <div className="w-16 h-1 bg-yellow mb-12"></div>

          <div className="prose prose-lg text-brown font-light space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">1. Prikupljanje informacija</h2>
              <p>
                Vaša privatnost nam je izuzetno važna. Platz Caffe se obavezuje da će štititi sve lične podatke koje nam poverite.
                Trenutno, naš veb-sajt služi prvenstveno u informativne svrhe i ne zahteva registraciju korisnika niti direktno prikuplja osetljive lične podatke.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">2. Upotreba kolačića (Cookies)</h2>
              <p>
                Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našem sajtu. Kolačići su male tekstualne datoteke koje se čuvaju na vašem uređaju i pomažu nam da analiziramo promet na sajtu i prilagodimo sadržaj vašim interesovanjima.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">3. Treće strane</h2>
              <p>
                Naš sajt može sadržati linkove ka spoljnim stranicama (poput Instagrama ili Facebooka). Platz Caffe nije odgovoran za politiku privatnosti ili sadržaj tih eksternih sajtova.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">4. Kontakt</h2>
              <p>
                Ako imate bilo kakvih pitanja u vezi sa našom politikom privatnosti, slobodno nas kontaktirajte putem emaila: {siteConfig.email}.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
