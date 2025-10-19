"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">MyPortfolio</h1>

        {/* Desktop Menu (visible only on md and above) */}
        <ul className="hidden md:flex gap-8 text-sm uppercase font-semibold">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button (visible only below md) */}
        <button
          className="md:hidden text-2xl hover:text-blue-400 transition"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (only visible on small screens) */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 py-6 text-center space-y-6 text-white font-medium">
          <a href="#hero" onClick={closeMenu} className="block hover:text-blue-400 transition">
            Home
          </a>
          <a href="#projects" onClick={closeMenu} className="block hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#skills" onClick={closeMenu} className="block hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#contact" onClick={closeMenu} className="block hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
