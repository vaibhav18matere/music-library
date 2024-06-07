import Navbar from "./components/Navbar";
import Hero from "./components/ui/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/ui/WhyChooseUS";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.2]">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
