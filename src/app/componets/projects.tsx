import React from "react";

const projectList = [
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce app with React, Node.js, and MongoDB.",
    image: "/images/project1.png",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    image: "/images/project2.png",
    link: "#",
    github: "#",
  },
  {
    title: "Task Manager",
    description: "A task manager app to track daily tasks with React and Firebase.",
    image: "/images/project3.png",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={project.link}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  className="px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
