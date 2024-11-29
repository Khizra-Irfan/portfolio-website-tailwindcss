"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="flex md:w-[70%] sm:w-[70%] lg:w-[80%] mr-0 sm:ml-[30%] lg:ml-[20%] md:ml-[30%]  relative flex-col lg:flex-row h-auto lg:h-screen">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-60 sm:h-60 md:h-[50vh] lg:h-full flex justify-center items-center">
        <div className="relative w-[95%] h-20 sm:h-[90%] md:h-[95%] border-2 border-gray-400 rounded-lg shadow-2xl overflow-hidden">
          {/* Image */}
          <Image
            src="/template_11.jpg"
            alt="About Image"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="font-serif italic flex flex-col justify-start w-full lg:w-1/2 px-4 sm:px-6 md:px-8 py-6 text-[#353638] h-auto bg-gradient-to-b from-white to-[#f7f9fc] shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-[#353638] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic tracking-wide mb-6 text-center transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300]">
          ~About Me~
        </h2>
        <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg font-medium tracking-wide">
          Hello! I’m <strong className="text-[#FFC300]">Khizra Irfan</strong>, a <strong className="text-[#1a73e8]">new web developer</strong> with a strong passion for building beautiful and functional websites. My journey into the world of web development began recently, driven by a desire to create innovative digital experiences and learn new technologies.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg font-medium tracking-wide">
          Although I am new to the professional field, I’ve quickly gained skills in <strong className="text-[#4285f4]">HTML</strong>, <strong className="text-[#34a853]">CSS</strong>, <strong className="text-[#fbbc05]">JavaScript</strong>, and <strong className="text-[#1a73e8]">React.js</strong>, with a growing interest in <strong className="text-[#34a853]">Next.js</strong> for building dynamic web applications.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg font-medium tracking-wide">
          I focus on writing clean, well-structured code and delivering responsive, user-friendly websites that perform well across all devices. My fresh perspective and enthusiasm drive me to tackle real-world challenges and create impactful projects.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg font-medium tracking-wide">
          I am excited to collaborate with experienced developers and designers, develop my skills further, and contribute to a team’s success. Let’s create something amazing together!
        </p>
        <button className="self-center mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#FFC300] text-white font-semibold text-sm sm:text-lg italic rounded-lg shadow-md hover:bg-[#e8b400] hover:shadow-lg transition-all duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
}
