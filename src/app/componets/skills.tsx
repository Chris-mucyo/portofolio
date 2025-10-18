import React from "react";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: "React", icon: <SiReact size={40} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#339933" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <span className="text-gray-700 dark:text-gray-300 mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
