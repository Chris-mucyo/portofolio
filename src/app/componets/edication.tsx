import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationList = [
  {
    institution: "Mount Carmel",
    degree: "Primary Level Education",
    years: "2021 — 2025",
    description: "Basic education with a focus on foundational skills in mathematics, science, and language arts.",
  },
  {
    institution: "Saint Laurent",
    degree: "High School Diploma",
    years: "2023 — 2026",
    description: "Comprehensive secondary education emphasizing critical thinking, literature, and advanced sciences.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Education</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {educationList.map((edu: { institution: string; degree: string; years: string; description: string }, index: number) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300 text-left"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-400 text-2xl">
              <FaGraduationCap />
              <h3 className="text-2xl font-semibold">{edu.institution}</h3>
            </div>
            <p className="text-gray-400 mb-2 font-medium">{edu.degree}</p>
            <p className="text-gray-500 mb-4">{edu.years}</p>
            <p className="text-gray-400">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
