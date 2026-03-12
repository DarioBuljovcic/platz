import { ContactSection } from "./components/ContactSection";
import { FadeIn } from "./components/FadeIn";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Highlights from "./components/Highlights";
import Separator from "./components/Separator";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-accent selection:bg-gold selection:text-green-accent">

      {/* SECTION 1: OUR STORY */}
      <Story />

      <Highlights />
      
      <Separator />
      
      {/* SECTION 2: MENU */}
      <Menu />
      
      <Separator />
      
      {/* SECTION 3: CONTACT */}
      <ContactSection />
    </main>
  );
}
