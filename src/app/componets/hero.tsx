import Image from "next/image";
import React from "react";


export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 pt-28"
      id="hero"
    >
      {/* Profile Picture */}
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
        <Image
          src="" 
          alt="Profile Picture"
          fill
          className="object-cover"
        />
      </div>

      {/* Hero Text */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold mb-4">Hey, I’m <span className="text-blue-500">Mucyo Chris</span></h1>
        <p className="text-gray-400 text-lg mb-8">
          A passionate Full-Stack Developer who loves building beautiful and functional web experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
