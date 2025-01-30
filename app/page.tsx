import HomeContent from "../components/home";
import About from "../components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HomeContent />
      <About />
    </main>
  );
}
