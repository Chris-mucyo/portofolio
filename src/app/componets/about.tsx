import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 max-w-4xl mx-auto text-center md:text-left"
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        I’m Chris, a Full-Stack Developer passionate about building web applications
        that are fast, responsive, and easy to use. I enjoy learning new technologies
        and improving my skills every day.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        My goal is to create user-friendly experiences and write clean, maintainable code.
        I’m constantly exploring new tools and frameworks to stay ahead in the fast-paced world of web development.
      </p>
    </section>
  );
}
