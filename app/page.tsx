import { ContactSection } from "./components/ContactSection";
import Story from "./components/Story";
import Highlights from "./components/Highlights";
import Separator from "./components/Separator";
import MainMenuSection from "./components/MainMenu";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-accent selection:bg-gold selection:text-green-accent">

      {/* SECTION 1: OUR STORY */}
      <Story />

      <Highlights />

      <Separator />

      {/* SECTION 2: MENU */}
      {/* <Menu /> */}
      <MainMenuSection />

      <Separator />

      {/* SECTION 3: CONTACT */}
      <ContactSection />
    </main>
  );
}
