import Image from 'next/image';

export default function BlogPage() {
  return (
    <div
      className="flex-grow p-6 md:p-12 overflow-auto italic font-serif sm:ml-[30%] lg:ml-[20%] md:ml-[28%] sm:justify-evenly"
      style={{
        width: 'auto',
        marginRight: '0%',  
      }}
    >
      {/* Page Heading */}
      <h1 className="text-[#1e1f21] text-3xl md:text-5xl sm:text-3xl font-serif font-extrabold shadow-2xl italic tracking-wider mb-6 md:mb-12 text-center transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300]">
        ~Our Process~
      </h1>
      <p className="text-center text-base md:text-lg sm:text-base shadow-xl text-[#5a5a5a] mb-8 md:mb-14 leading-relaxed">
        Our process is a flexible framework that adapts, evolves, and responds to your needs. It is the streamlined
        result of two decades of website design and marketing for hundreds of clients.
      </p>

      {/* Content Section 1 */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 md:mb-16 sm:mb-8 w-full sm:w-auto">
        {/* Image */}
        <div className="flex-1 relative w-[250px] sm:w-60 sm:h-60 md:w-[180px] h-[250px] md:h-[250px]  min-w-[100px] min-h-[100px]">
          <Image
            src="/plan01.png"
            alt="Plan 01"
            fill
            className="shadow-xl object-contain rounded-lg"
          />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col md:w-[60%]">
          <div className="flex items-center gap-4 md:gap-1 mb-4">
            <span className="text-[#FFC300] text-5xl md:text-7xl font-extrabold">01</span>
            <h3 className="text-[#1e1f21] text-2xl md:text-4xl font-serif font-extrabold italic tracking-wider transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300] p-4 rounded-lg shadow-xl">
              Plan:
            </h3>
          </div>
          <p className="text-sm md:text-lg text-[#5a5a5a] leading-relaxed">
            We set priorities, organize content, and understand the buyer’s journey that your audience takes as they navigate your website. At the end of the strategy phase, you’ll have a blueprint—a comprehensive plan outlining your website’s design, content, and functionality.
          </p>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12 mb-12 md:mb-16 w-full">
        {/* Image */}
        <div className="flex-1 relative w-[250px] sm:w-60 sm:h-60 md:w-[180px] h-[250px] md:h-[400px] min-w-[100px] min-h-[100px]">
          <Image
            src="/design02.png"
            alt="Design 02"
            fill
            className="shadow-xl object-contain rounded-lg"
          />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col md:w-[50%]">
          <div className="flex items-center gap-4 mb-4 md:gap-0">
            <span className="text-[#FFC300] text-5xl md:text-7xl font-extrabold">02</span>
            <h3 className="text-[#1e1f21] text-2xl md:text-4xl font-serif font-extrabold italic tracking-wider transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300] p-4 rounded-lg shadow-xl">
              Design:
            </h3>
          </div>
          <p className="text-sm md:text-lg text-[#5a5a5a] leading-relaxed">
            Once the Blueprint is approved, we create wireframes and a design comp for your review. This process involves various reviews, approvals, and close communication between you and our creative team.
          </p>
          <div className="flex justify-center mt-6">
            <button className="w-[120px] md:w-[160px] h-[36px] md:h-[40px] bg-[#1e1f21] text-xs md:text-base text-white font-semibold rounded-md hover:bg-[#FFC300] hover:text-[#1e1f21] transition-all duration-300">
              VIEW METHODS
            </button>
          </div>
        </div>
      </div>

      {/* Content Section 3 */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 md:mb-16 w-full">
        {/* Image */}
        <div className="flex-1 relative w-[250px] sm:w-60 sm:h-60 md:w-[180px] h-[250px] md:h-[250px] min-w-[100px] min-h-[100px]">
          <Image
            src="/develop03.png"
            alt="Develop 03"
            fill
            className="shadow-xl object-contain rounded-lg"
          />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col md:w-[50%]">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#FFC300] text-5xl md:text-7xl font-extrabold">03</span>
            <h3 className="text-[#1e1f21] text-2xl md:text-3xl font-serif font-extrabold italic tracking-wider transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300] p-1 rounded-lg shadow-xl">
              Develop:
            </h3>
          </div>
          <p className="text-sm md:text-lg text-[#5a5a5a] leading-relaxed">
            With the blueprint & design comps as our guide, the development team begins to create your website with state-of-the-art tools. Our team works to add content, finalize design elements, review, and test your website for quality.
          </p>
        </div>
      </div>

      {/* Content Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12 mb-12 md:mb-16 w-full">
        {/* Image */}
        <div className="flex-1 relative w-[250px] sm:w-60 sm:h-60 md:w-[180px] h-[250px] md:h-[400px] min-w-[100px] min-h-[100px]">
          <Image
            src="/deploy04.png"
            alt="Deploy 04"
            fill
            className="shadow-xl object-contain rounded-lg"
          />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col md:w-[50%]">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#FFC300] text-5xl md:text-7xl font-extrabold">04</span>
            <h3 className="text-[#1e1f21] text-2xl md:text-4xl font-serif font-extrabold italic tracking-wider transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300] p-4 rounded-lg shadow-xl">
              Deploy:
            </h3>
          </div>
          <p className="text-sm md:text-lg text-[#5a5a5a] leading-relaxed">
            After testing and review, we present your new website. Upon your approval, your website will be launched, promoted, and optimized for search engines.
          </p>
          <div className="flex justify-center mt-6 sm:mt-4">
            <button className="w-[120px] md:w-[160px] sm:w-[90px] h-[36px] md:h-[40px] bg-[#1e1f21] text-xs md:text-base text-white font-semibold rounded-md hover:bg-[#FFC300] hover:text-[#1e1f21] transition-all duration-300">
              SEE PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
