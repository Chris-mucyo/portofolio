import Hero from "./componets/hero";
import About from "./componets/about";
import Projects from "./componets/projects";
import Skills from "./componets/skills";
import Contact from "./componets/contact";
import Navbar from "./componets/navbar";
import Education from "./componets/edication";
import GitHubGraph from "./componets/GithubGraph";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <Projects />
      <Skills />
      <GitHubGraph username="Chris-mucyo" />
      <Education />
      <Contact />

    </main>
  );
}
