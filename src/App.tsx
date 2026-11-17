import Header from "./components/layouts/Navebar";
import Home from "./components/sections/Home";
import SpecializationsMarquee from "./components/sections/SpecializationsMarquee";
import DomainProof from "./components/sections/DomainProof";
import Experience from "./components/sections/Experience";
import Portfolio from "./components/sections/Portfolio";
import Projects from "./components/sections/Projects";
import AboutMe from "./components/sections/About me";
import Contact from "./components/sections/Contacts";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="pt-16">
        <SpecializationsMarquee />
        <Home />
        <DomainProof />
        <Experience />
        <Portfolio />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <WhatsAppFloat />
    </div>
  );
}
