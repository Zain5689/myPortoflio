import { Heading } from "@components/index";
import { skills } from "@data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        py-24
        relative
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Heading title="Skills" />

        <div
          className="
            flex flex-wrap justify-center gap-4
            mt-16
          "
        >
          {skills.map(({ id, skillName, Icon, color }) => (
            <div
              key={id}
              className="
                flex items-center gap-5
                px-5 py-2.5
                rounded-full
                border border-gray-300 dark:border-primary/50
                text-gray-800 dark:text-text-main
                bg-gray-50 dark:bg-transparent
                transition-all duration-300
                hover:bg-primary/10
                hover:border-primary
                hover:-translate-y-1
                mb-2
              "
            >
              <Icon size={25} className={color} />
              <span className="text-md font-medium">{skillName}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
