import { ContactSection } from "./components/ContactSection";
import Story from "./components/Story";
import Highlights from "./components/Highlights";
import Separator from "./components/Separator";
import MainMenuSection from "./components/MainMenu";
import RotatingReviews from "./components/RotatingReviews";
import PartnersLine from "./components/PartnersLine";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-accent selection:bg-gold selection:text-green-accent">

      {/* SECTION 1: OUR STORY */}
      <Story />
      {/* SECTION 2: HIGHTLIGHTS */}
      <Highlights />
      <Separator />

      {/* SECTION 3: MENU */}
      <MainMenuSection />
      <Separator />

      {/* SECTION 4: REVIEWS */}
      <RotatingReviews />
      <Separator />

      {/* SECTION 5: PARTNERS */}
      <PartnersLine />

      {/* SECTION 6: CONTACT */}
      <ContactSection />
    </main>
  );
}
