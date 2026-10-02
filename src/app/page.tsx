import Hero from "./_components/Hero";
import Clients from "./_components/Clients";
import AboutPreview from "./_components/AboutPreview";
import Services from "./_components/Services";
import LightingSolutions from "./_components/LightingSolutions";
import Achievements from "./_components/Achievements";
import BeforeAfter from "./_components/BeforeAfter";
import Projects from "./_components/Projects";
import LargeImageSlider from "./_components/LargeImageSlider";
import ThreeImageEditorial from "./_components/ThreeImageEditorial";
import SmallImageComposition from "./_components/SmallImageComposition";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <LargeImageSlider />
      <AboutPreview />
      <Services />
      <LightingSolutions />
      <ThreeImageEditorial />
      <Achievements />
      <BeforeAfter />
      <Projects />
      <SmallImageComposition />
    </main>
  );
}
