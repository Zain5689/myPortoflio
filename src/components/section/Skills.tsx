import { Heading } from "@components/index";
import { skills } from "@data/skills";

const Skills = () => {
  return (
    <section className=" py-20 px-6 relative overflow-hidden ">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <Heading title="Skills" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-16">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-surface border border-white/5 p-8 rounded-xl 
                         flex flex-col items-center justify-center transition-all duration-300 
                         hover:border-primary/40 hover:shadow-[0_0_20px_rgba(95,45,237,0.1)] 
                         hover:-translate-y-1"
            >
              <h2 className="text-text-main text-base font-semibold tracking-widest uppercase transition-colors group-hover:text-primary">
                {skill.skillName}
              </h2>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
