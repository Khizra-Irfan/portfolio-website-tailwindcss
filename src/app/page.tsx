"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/template_01.jpg", "/template04.jpg", "/template06.webp"];
  const transitionDelay = 2000; // 2 seconds for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDelay);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="relative flex h-screen ml-0 sm:ml-[30%] lg:ml-[20%] md:ml-[28%] px-0">
      {/* Image Slideshow */}
      <div className="relative flex-1 overflow-hidden rounded border-4 sm:border-2 border-gray-400 shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`template-${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}

        {/* Download CV Button */}
        <a
          href="https://milestones-1-2-chi-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base lg:text-lg font-serif font-bold shadow-md sm:shadow-2xl hover:scale-105 hover:shadow-lg hover:from-blue-500 hover:to-purple-400 transition-transform duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
