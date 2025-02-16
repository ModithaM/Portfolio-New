import HomeContent from "../components/home";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "@/components/contact";
import Volunteer from "@/components/volunteer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HomeContent />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Volunteer />
      <Contact />
    </main>
  );
}
