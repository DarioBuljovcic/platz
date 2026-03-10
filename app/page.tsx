import { ContactSection } from "./components/ContactSection";
import { FadeIn } from "./components/FadeIn";
import Menu from "./components/Menu";
import Story from "./components/Story";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-beige selection:bg-yellow selection:text-brown-dark">

      {/* SECTION 1: OUR STORY */}
      <Story />
      {/* SECTION 2: MENU */}
      <Menu />
      {/* SECTION 3: CONTACT */}
      <ContactSection />
    </main>
  );
}
