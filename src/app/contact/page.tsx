export default function ContactPage() {
  return (
    <div
      className="flex-grow p-12 sm:p-4 md:p-8 sm:ml-[30%] lg:ml-[20%] md:ml-[28%] overflow-auto font-serif"
      style={{
        width: 'auto',
        marginRight: '0%',
      }}
    >
      {/* Page Heading */}
      <h1 className="text-[#1e1f21] text-5xl sm:text-2xl md:text-3xl lg:text-5xl font-serif font-extrabold shadow-2xl sm:mb-5 italic tracking-wider mb-12 text-center transition-all duration-300 transform hover:scale-105 hover:text-[#FFC300] border-b-4 border-[#FFC300] pb-4">
        ~Contact Us~
      </h1>
      <p className="text-center text-xl sm:text-sm md:text-base shadow-xl text-[#5a5a5a] mb-16 mt-3 sm:mb-4 leading-relaxed italic">
        Get in touch with us for inquiries, collaborations, or just to say hello! We&apos;re here to help and answer any questions you may have.
      </p>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center gap-8 sm:gap-4 mb-16 sm:mb-8 w-full italic">
        <form
          className="w-full max-w-3xl bg-[#f8f9fa] p-6 sm:p-4 rounded-lg shadow-lg border-2 border-[#FFC300] transition-all duration-300 hover:border-[#1e1f21]"
          noValidate
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[#1e1f21] text-1xl sm:text-base font-semibold mb-2 italic"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 text-lg sm:text-sm text-[#5a5a5a] border border-[#ccc] italic rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#1e1f21] text-1xl sm:text-base font-semibold mb-2 italic"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-lg sm:text-sm text-[#5a5a5a] italic border border-[#ccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-[#1e1f21] text-1xl sm:text-base font-semibold mb-2 italic"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 text-lg sm:text-sm text-[#5a5a5a] border border-[#ccc] italic rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-[#1e1f21] text-1xl sm:text-base font-semibold mb-2 italic"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 text-lg sm:text-sm text-[#5a5a5a] border border-[#ccc] italic rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
              placeholder="Enter the subject of your message"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-[#1e1f21] text-1xl sm:text-base font-semibold italic mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 text-lg sm:text-sm text-[#5a5a5a] border border-[#ccc] italic rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full h-[50px] sm:h-[40px] bg-[#1e1f21] text-white sm:text-sm italic font-semibold rounded-md hover:bg-[#FFC300] hover:text-[#1e1f21] transition-all duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="flex flex-col items-center gap-8 sm:gap-4 w-full">
        <h2 className="text-[#1e1f21] text-3xl sm:text-2xl lg:text-5xl font-serif font-extrabold shadow-lg italic tracking-wider mb-6 sm:mb-4 text-center transition-all duration-300 transform hover:scale-110 hover:text-[#FFC300] border-b-4 border-[#FFC300] pb-4">
          ~Visit Us~
        </h2>
        <div className="relative w-full max-w-3xl h-[400px] sm:h-[250px] rounded-lg overflow-hidden shadow-xl border-2 border-[#FFC300] transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086610882138!2d-122.40109618468135!3d37.771887179758704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818a1f8b69c7%3A0xa6c9b5b4d2852ff7!2s500%20Terry%20Francine%20St%2C%20San%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1676964213870!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
