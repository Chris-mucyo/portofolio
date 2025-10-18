import Hero from "./componets/hero";
import About from "./componets/about";
import Projects from "./componets/projects";
import Skills from "./componets/skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main> 
  );
}
