import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedCourses } from "./components/FeaturedCourses";
import { WhyChooseUs } from "./components/WhyChooseUS";
import { MusicTestimonials } from "./components/TestimonialCards";
import Webinars from "./components/Webinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.2]">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <MusicTestimonials />
      <Webinars />
      <WhyChooseUs />
    </main>
  );
}
