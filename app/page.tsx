import HomeContent from "../components/home";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "@/components/contact";
import Volunteer from "@/components/volunteer";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HomeContent />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Volunteer />
      <Contact />
    </main>
  );
}
