import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SkillsSphere from "@/components/SkillsSphere";
import Timeline from "@/components/Timeline";
import TechnicalExperience from "@/components/TechnicalExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      
      <TechnicalExperience />

      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
