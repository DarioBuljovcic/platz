import { FadeIn } from "../components/FadeIn";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-beige pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="font-display text-5xl md:text-7xl mb-12 text-brown">Uslovi korišćenja</h1>
          <div className="w-16 h-1 bg-yellow mb-12"></div>
          
          <div className="prose prose-lg text-brown font-light space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">1. Opšti uslovi</h2>
              <p>
                Pristupom ovom veb-sajtu, prihvatate ove uslove korišćenja u potpunosti. Platz Café zadržava pravo da u bilo kom trenutku izmeni sadržaj sajta ili ove uslove bez prethodne najave.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">2. Intelektualna svojina</h2>
              <p>
                Sav sadržaj na ovom sajtu, uključujući tekst, slike, logotipe i dizajn, vlasništvo je Platz Caféa ili se koristi uz dozvolu. Zabranjeno je kopiranje, distribucija ili bilo koja druga upotreba sadržaja bez pismene saglasnosti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">3. Ograničenje odgovornosti</h2>
              <p>
                Trudimo se da sve informacije na sajtu budu tačne i ažurne (poput cena i ponude u meniju), ali ne garantujemo potpunu tačnost u svakom trenutku. Platz Café se ne može smatrati odgovornim za bilo kakvu štetu nastalu korišćenjem informacija sa ovog sajta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">4. Rezervacije</h2>
              <p>
                Informacije o rezervacijama i događajima na sajtu su informativnog karaktera. Za potvrdu rezervacije, molimo vas da nas kontaktirate direktno putem telefona.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
