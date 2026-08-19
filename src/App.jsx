import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import CreativeWorks from "./components/CreativeWorks";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="bg-[#FCFCFC] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <CreativeWorks />
      <Contact />
      <Analytics />
    </main>
  );
}

export default App;