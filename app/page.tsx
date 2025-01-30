import HomeContent from "../components/home";
import About from "../components/about";
import Education from "../components/education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HomeContent />
      <About />
      <Education />
    </main>
  );
}
