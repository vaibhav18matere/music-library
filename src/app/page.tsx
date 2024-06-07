import Navbar from "./components/Navbar";
import Hero from "./components/ui/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.2]">
      <Navbar />
      <Hero />
    </main>
  );
}
