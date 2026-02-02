// import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import DeveloperFrontEnd from "@assets/lottieFiles/developerskills.lottie";

const Hero = () => {
  return (
    <section className="relative font-serif h-[70vh] flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="container max-w-7xl mx-auto px-6 relative w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-primary font-poppins text-xl font-medium tracking-wider">
            Hi There! 👋
          </h2>

          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white leading-tight">
            I'M{" "}
            <span className="text-primary drop-shadow-[0_0_10px_rgba(167,209,41,0.3)]">
              ZAINAB HILAL
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="text-xl md:text-3xl font-roboto text-gray-400 font-light flex gap-2">
            <span>A Creative</span>
            <span className="text-white font-semibold">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "React Specialist",
                    "learning MERN Stack",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </div>

          <p className="text-gray-500 max-w-lg text-lg leading-relaxed pt-4">
            Aspiring Front-End Developer with expertise in React, Next.js,
            TypeScript, and Tailwind CSS. dedicated to creating engaging user
            experiences and continuously enhancing web application performance.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:shadow-[0_0_5px_#a7d129] transition-all">
              Contact Me
            </button>
            <a
              href="/Zainab_Hilal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/10 transition-all inline-block"
            >
              View Resume
            </a>
          </div>
        </div>
        {/* Right Content - Lottie Animation */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 z-50">
          <div className="w-full  relative">
            <div className="absolute inset-0  rounded-full"></div>

            <DotLottieReact
              src={DeveloperFrontEnd}
              loop
              autoplay
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
