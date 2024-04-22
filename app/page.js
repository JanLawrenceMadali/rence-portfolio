import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="container px-12 py-4 mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  );
}
