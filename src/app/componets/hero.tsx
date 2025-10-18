import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m Chris
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
        I’m a Full-Stack Developer passionate about building modern web applications.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-700 dark:border-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
