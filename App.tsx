import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <Services />
        <ValueProposition />
        <Process />
        <About />
        <Portfolio />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
