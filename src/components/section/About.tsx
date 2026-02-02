import myImage from "@assets/images/zainab.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 py-16 max-w-7xl mx-auto text-gray-200 overflow-hidden"
    >
      <div className="relative group order-1 lg:order-2 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={myImage}
          alt="Zainab profile photo"
          className="relative rounded-full w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover mx-auto border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-white leading-tight">
          Let Me Introduce{" "}
          <span className="text-primary drop-shadow-[0_0_10px_rgba(120,199,252,0.3)]">
            Myself
          </span>
        </h2>

        <div className="space-y-4 md:space-y-6">
          <p className="leading-relaxed text-lg md:text-xl text-gray-200">
            I’m a
            <span className="text-primary font-semibold mx-1">
              Frontend Developer
            </span>
            deeply passionate about crafting clean, responsive, and
            user-friendly interfaces. I focus on experiences that look visually
            appealing and feel intuitive.
          </p>

          <p className="leading-relaxed text-base md:text-lg text-gray-400">
            I enjoy transforming design concepts into interactive digital
            experiences. Writing clean, maintainable code allows me to create
            interfaces that feel smooth and engaging.
          </p>

          <p className="leading-relaxed text-base md:text-lg text-gray-400">
            Currently expanding into the
            <span className="font-semibold text-primary mx-1">MERN Stack</span>.
            My goal is to build scalable, performance-optimized full-stack
            applications.
          </p>

          <div className="pt-4 inline-block">
            <p className="text-sm md:text-base text-gray-300 border-l-2 border-primary pl-4 py-1 italic">
              Proficient in{" "}
              <span className="text-white font-medium">
                HTML, CSS, JS, React
              </span>
              . Learning{" "}
              <span className="text-white font-medium">
                Node, Express, MongoDB
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
