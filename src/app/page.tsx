import Image from "next/image";
import Hero from "./_components/Hero";
import Clients from "./_components/Clients";
import AboutPreview from "./_components/AboutPreview";
import Services from "./_components/Services";
import LightingSolutions from "./_components/LightingSolutions";
import Achievements from "./_components/Achievements";
import BeforeAfter from "./_components/BeforeAfter";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <AboutPreview />
      <Services />
      <LightingSolutions />
      <Achievements />
      <BeforeAfter />
      <Projects />
    </main>
  );
}
