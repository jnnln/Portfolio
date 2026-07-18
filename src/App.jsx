import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-[#FCFCFC] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}

export default App;