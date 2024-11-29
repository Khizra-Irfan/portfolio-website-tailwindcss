"use client";

import React from "react";
import {
  FaPaintBrush,
  FaMobileAlt,
  FaCode,
  FaAppStore,
  FaImage,
  FaPencilRuler,
  FaIcons,
  FaLaptopCode,
  FaFigma,
} from "react-icons/fa";

export default function Services() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-[#f8f9fc] to-[#e7e9ee]">
      {/* Navigation Bar - Fixed 30% Width */}
      <div className="w-[30%] text-white bold p-8 shadow-lg">
        <h2 className="text-3xl font-extrabold mb-8 ml-12 tracking-wide">Navigation</h2>
        <ul className="space-y-6">
          {[
            { id: "#web-design", label: "Web Design" },
            { id: "#responsive-design", label: "Responsive Design" },
            { id: "#web-development", label: "Web Development" },
            { id: "#web-application", label: "Web Application" },
            { id: "#banner-design", label: "Banner Design" },
            { id: "#branding", label: "Branding" },
            { id: "#icon-design", label: "Icon Design" },
            { id: "#figma-design", label: "Figma Design" },
            { id: "#laptop-design", label: "Laptop Design" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                className="text-xl tracking-wide hover:text-[#FFC300] transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area - Flexible Width */}
      <div className="flex-grow p-8 sm:p-10 md:p-12 overflow-auto italic font-serif">
        {/* Heading */}
        <h1 className="text-[#1e1f21] text-3xl sm:text-3xl lg:text-5xl font-serif font-extrabold shadow-2xl italic tracking-wider mb-12 text-center transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300]">
          ~Our Professional Services~
        </h1>

        {/* Services Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-1 sm:py-2">
          {[
            {
              id: "web-design",
              icon: <FaPaintBrush />,
              title: "Web Design",
              description:
                "We create beautiful, user-friendly web designs that ensure the best user experience. Our designs are clean and modern to elevate your brand’s image.",
            },
            {
              id: "responsive-design",
              icon: <FaMobileAlt />,
              title: "Responsive Design",
              description:
                "We ensure your website is mobile-friendly and responsive, adjusting perfectly to different screen sizes for a seamless user experience across devices.",
            },
            {
              id: "web-development",
              icon: <FaCode />,
              title: "Web Development",
              description:
                "We turn your designs into fully functional websites, using clean and maintainable code. Our focus is on performance, scalability, and security.",
            },
            {
              id: "web-application",
              icon: <FaAppStore />,
              title: "Web Application",
              description:
                "We build dynamic web applications that are fast, secure, and scalable, designed to meet your business requirements and user needs.",
            },
            {
              id: "banner-design",
              icon: <FaImage />,
              title: "Banner Design",
              description:
                "Our banner designs are visually appealing and designed to grab attention, creating a perfect blend of creativity and messaging.",
            },
            {
              id: "branding",
              icon: <FaPencilRuler />,
              title: "Branding",
              description:
                "We help build your brand identity, from logos to complete brand guidelines, ensuring consistency and recognition across all platforms.",
            },
            {
              id: "icon-design",
              icon: <FaIcons />,
              title: "Icon Design",
              description:
                "We create custom icons that are unique, memorable, and fully aligned with your brand. Perfect for apps, websites, and branding materials.",
            },
            {
              id: "figma-design",
              icon: <FaFigma />,
              title: "Figma Design",
              description:
                "We use Figma to design user-friendly and modern interfaces that are both interactive and visually stunning for your digital projects.",
            },
            {
              id: "laptop-design",
              icon: <FaLaptopCode />,
              title: "Laptop Design",
              description:
                "We provide creative laptop design mockups to showcase your work in the most visually appealing way, giving your portfolio a professional edge.",
            },
          ].map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ServiceCard Component
interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ id, icon, title, description }: ServiceCardProps) {
  return (
    <div
      id={id}
      className="bg-white p-6 sm:p-2 rounded-lg shadow-md border border-[#ddd] hover:border-[#FFC300] transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b from-[#ffffff] to-[#f0f8ff]"
    >
      <div className="text-5xl sm:text-6xl text-[#1a73e8] mb-4 sm:mb-6 mx-auto">{icon}</div>
      <h2 className="text-xl sm:text-2xl font-bold text-[#353638] mb-3 sm:mb-2 text-center">
        {title}
      </h2>
      <p className="text-[#5a5a5a] text-sm sm:text-base leading-relaxed text-center">
        {description}
      </p>
      <button className="mt-4 sm:mt-4 px-4 sm:px-6 py-2 bg-[#FFC300] text-white font-bold italic font-serif rounded-full hover:bg-[#e8b000] transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
}
