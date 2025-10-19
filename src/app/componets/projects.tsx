import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js and TailwindCSS.",
    image: "/images/project1.png",
    tech: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack online store with product listings, cart, and payments.",
    image: "/images/project2.png",
    tech: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />],
    github: "https://github.com/yourusername/ecommerce-app",
    live: "https://ecommerce-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-blue-500/20 transition-transform duration-300"
          >
            {/* 👇 Image with blur + fade-in on hover */}
            <div className="relative w-full h-60 overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter blur-sm opacity-70 group-hover:blur-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-3 mb-4 text-xl text-blue-400">
                {project.tech.map((icon) => icon)}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
