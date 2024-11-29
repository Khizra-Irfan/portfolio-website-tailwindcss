"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

export default function Navbar() {
  // Move phrases outside the component or memoize it
  const phrases = useMemo(() => ["Web Developer", "Web Designer", "Frontend Developer"], []);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseTime = 1000;

  // Typing effect logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < phrases[index].length) {
        setDisplayedText((prev) => prev + phrases[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === phrases[index].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, phrases]);

  return (
    <nav className="h-screen w-[30%] sm:w-[30%] lg:w-[20%] bg-gradient-to-b from-[#202021] to-[#82858c] fixed top-0 left-0 z-10 shadow-lg">
      <div className="flex flex-col h-full items-center pt-10">
        {/* Header */}
        <h1 className="text-white text-2xl sm:text-1xl lg:text-4xl font-extrabold italic tracking-widest shadow-2xl font-serif text-center hover:text-[#FFC300]">
          ~Khizra Irfan~
        </h1>

        {/* Typing Effect */}
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#fcf405] to-[#f5ab0c] shadow-md text-center">
          {displayedText}
          <span className="animate-pulse text-white">|</span>
        </p>

        {/* Navigation Links */}
        <div className="mt-8 space-y-3 w-full flex flex-col items-center">
          {["HOME", "ABOUT", "SERVICES", "PROJECTS", "BLOG", "CONTACT"].map(
            (item) => (
              <Link
                key={item}
                href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                title={`Go to ${item}`}
                className="text-gray-300 text-sm sm:text-base lg:text-lg font-serif italic tracking-widest hover:text-[#FFC300] hover:underline transition-all outline-none"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto w-full p-4 text-gray-50 font-serif italic tracking-wider text-[12px] sm:text-[14px] lg:text-[16px] text-center">
          <p>
            <i className="fa-regular fa-copyright"></i> Copyright 2024 Made with{" "}
            <i className="fa-solid fa-heart hover:text-[#FFC300]"></i> by
            <span className="text-[#FFC300] text-[14px] sm:text-[17px] lg:text-[20px]">
              {" "}
              ~Khizra Irfan~
            </span>
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex justify-center items-center space-x-4">
            {[
              { href: "https://facebook.com", icon: "fa-facebook-square" },
              { href: "https://instagram.com", icon: "fa-instagram" },
              { href: "https://linkedin.com", icon: "fa-linkedin" },
              { href: "https://twitter.com", icon: "fa-twitter" },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.icon.replace("fa-", "")}`}
                className="text-gray-100 text-base sm:text-lg lg:text-xl hover:text-[#FFC300] transition-all outline-none"
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
