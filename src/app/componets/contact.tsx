import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-5xl mx-auto text-center bg-gradient-to-br from-black via-[#001F3F] to-[#004AAD] text-white rounded-2xl shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12">
        I’m always open to new opportunities and collaborations. Let’s connect!
      </p>

      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="mailto:youremail@example.com"
          className="hover:text-blue-600 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Chris-mucyo"
          target="_blank"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
