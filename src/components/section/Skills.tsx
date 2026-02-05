import { Heading } from "@components/index";
import { skills } from "@data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <Heading title="Skills" />

        <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-12 md:mt-20">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-surface border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(120,199,252,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h2 className="text-text-main text-sm md:text-base font-bold tracking-wider uppercase text-center transition-colors group-hover:text-primary z-10">
                {skill.skillName}
              </h2>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary shadow-[0_0_10px_#78c7fc] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
