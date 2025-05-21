// components/Header.jsx
import React from "react";
import logo from "../assets/img/logo.jpg"

export default function Header() {
  return (
    <header className="bg-background text-text font-sans w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-header font-bold text-xl">PornLabAi</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#features" className="hover:text-brand">Features</a>
          <a href="#how" className="hover:text-brand">How It Works</a>
          <a href="#pricing" className="hover:text-brand">Pricing</a>
          <a href="#contact" className="hover:text-brand">Contact Us</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-brand text-brand px-5 py-2 rounded-lg hover:bg-brand hover:text-white transition">
            Sign Up
          </button>
          <button className="bg-brand px-5 py-2 text-white rounded-lg hover:opacity-90 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {/* Add a mobile menu toggle logic here */}
          <button className="text-brand focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
