"use client";

import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

function ProjectCard({ id, title, description, link, image }: ProjectCardProps) {
  return (
    <div
      id={id}
      className="bg-white p-4 sm:p-3 rounded-lg shadow-md border border-[#ddd] hover:border-[#FFC300] transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b from-[#ffffff] to-[#f0f8ff] relative flex flex-col justify-between h-[500px]" // Fixed card height
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-md shadow-md bg-[#f8f8f8] h-[60%]">
        <Image
          src={image}
          alt={title}
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Ensures the image aspect ratio is maintained
          className="transition-transform duration-500 hover:scale-105 hover:brightness-110"
        />
      </div>

      {/* Text Section */}
      <h2 className="relative text-3xl sm:text-xl font-bold text-[#353638] mt-4 mb-4 text-center group">
        {title}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-1/3 h-[3px] bg-[#FFC300] transition-all duration-300 group-hover:w-1/2"></span>
      </h2>
      <p className="text-[#5a5a5a] text-sm leading-relaxed text-center mb-4 px-2">
        {description}
      </p>

      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-4 py-2 bg-[#FFC300] text-white text-lg font-bold italic rounded-full hover:bg-[#e8b000] transition-colors duration-300 inline-flex items-center justify-center shadow-md self-center"
      >
        Visit Project <FaExternalLinkAlt className="ml-2" />
      </a>
    </div>
  );
}


export default function Projects() {
  const projects = [
    {
      id: "countdown-timer",
      title: "~Countdown Timer~",
      description:
        "A dynamic countdown timer created using Next.js. Interactive and sleek for various uses like events and sales.",
      link: "https://countdown-timer-byusing-next-js.vercel.app/",
      image: "/countdown-timer.jpg",
    },
    {
      id: "basic-website",
      title: "~Basic Website~",
      description:
        "A simple yet responsive website built with Next.js. Ideal for showcasing your portfolio or business.",
      link: "https://my-basic-website-assign1.vercel.app/",
      image: "/basic-website.jpg",
    },
    {
      id: "figma-website",
      title: "~Figma Website~",
      description:
        "Designed using Figma and developed in Next.js. A modern interface for professional presentations.",
      link: "https://website-byusing-figma.vercel.app/",
      image: "/figma-website.jpg",
    },
    {
      id: "landing-page",
      title: "~Landing Page~",
      description:
        "A clean and eye-catching landing page created using Figma and Next.js for impactful first impressions.",
      link: "https://landing-page-figma-assignment3.vercel.app/",
      image: "/landing-page.jpg",
    },
    {
      id: "multi-page",
      title: "~Multi-page Website~",
      description:
        "A fully responsive multi-page website designed with Tailwind CSS, showcasing scalable designs.",
      link: "https://multi-page-website-tailwind-css-eta.vercel.app/",
      image: "/multi-page.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#f8f9fc] to-[#f5f5eb]">
      {/* Navigation Bar */}
      <div className="hidden sm:block sm:w-[25%] text-white p-6 shadow-lg fixed h-full top-0 left-0">
        <h2 className="text-3xl font-extrabold mb-8 ml-6 tracking-wide">
          Navigation
        </h2>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                className="text-lg tracking-wide hover:text-[#FFC300] transition-colors duration-300"
              >
                {project.title.replace(/~/g, "")}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div
        className="flex-grow p-6 md:p-12 overflow-auto italic font-serif sm:ml-[28%] lg:ml-[20%] md:ml-[28%] sm:justify-evenly"
        style={{
          width: 'auto',
          marginRight: '0%',
        }}
      >
        <h1 className="text-[#1e1f21] text-4xl sm:text-2xl lg:text-5xl font-serif font-extrabold shadow-2xl italic tracking-wider mb-8 text-center transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300]">
          ~My Professional Projects~
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 px-4 sm:px-2 sm:py-0">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
