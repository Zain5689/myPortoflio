import myImage from "../../assets/images/zainab.jpg";

const About = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center gap-14 px-6 py-16 max-w-7xl mx-auto text-gray-200">
      {/* Text Content */}
      <div className="flex-1 space-y-8 pr-16">
        <h2 className="text-4xl font-extrabold tracking-wide text-white text-center mb-10">
          Let Me Introduce <span className="text-primary">Myself</span>
        </h2>

        <p className="leading-relaxed text-xl text-gray-200">
          I’m a
          <span className="bg-primary bg-clip-text text-transparent font-semibold mx-2">
            Frontend Developer
          </span>
          who is deeply passionate about crafting clean, responsive, and
          user-friendly web interfaces. I focus on building experiences that not
          only look visually appealing but also feel intuitive, fast, and
          accessible across all devices and screen sizes.
        </p>

        <p className="leading-relaxed text-lg text-gray-300">
          I enjoy transforming design concepts and creative ideas into
          interactive digital experiences using modern frontend technologies.
          Writing clean, maintainable code and paying attention to UI details
          allows me to create interfaces that feel smooth, engaging, and easy
          for users to navigate.
        </p>

        <p className="leading-relaxed text-lg text-gray-300">
          Over time, I have been expanding my skill set by learning modern
          frontend tools and gradually moving into the
          <span className="font-semibold text-primary mx-2">MERN Stack</span>.
          My goal is to become a well-rounded full-stack developer capable of
          building complete, scalable, and performance-optimized web
          applications.
        </p>

        <p className="leading-relaxed text-lg text-gray-300">
          I’m proficient in
          <span className="font-semibold text-primary mx-2">
            HTML, CSS, JavaScript, and React.js
          </span>
          , and I’m currently learning
          <span className="font-semibold text-primary mx-2">
            Node.js, Express, and MongoDB
          </span>
          as part of my full-stack development journey. I enjoy building
          real-world projects that help me continuously improve performance,
          usability, and accessibility.
        </p>
      </div>

      {/* Image */}
      <div className="relative  group">
        <div className="absolute inset-0 rounded-full bg-primary  from-primary to-purple-500 blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>

        <img
          src={myImage}
          alt="Zainab profile photo"
          className="relative rounded-full w-64 h-64 object-cover mx-auto border-4 border-white/30 shadow-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default About;
