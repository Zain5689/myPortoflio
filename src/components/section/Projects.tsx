import { useState } from "react";
import { Github, Link2, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading } from "@components/index";
import { projects } from "@data/projects";

const Projects = () => {
  const [active, setActive] = useState("all");

  const filteredProjects =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const categories = [
    { key: "all", label: "All" },
    { key: "CSS", label: "HTML & CSS" },
    { key: "js", label: "JavaScript" },
    { key: "boot", label: "Bootstrap" },
    { key: "tail", label: "Tailwind" },
    { key: "react", label: "React" },
  ];

  return (
    <section className=" py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <Heading title="Featured Projects" />

        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-20">
          {categories.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActive(btn.key)}
              className={`
                px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-500
                ${
                  active === btn.key
                    ? "bg-primary text-white shadow-[0_0_10px_rgba(93,188,252,0.4)]"
                    : "bg-surface/40 text-text-muted border border-white/5 hover:border-primary/30 hover:text-primary"
                }
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-surface/20 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  object-cover transition-transform duration-700 group-hover:scale-101"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80"></div>

                <span className="absolute top-5 left-5 bg-primary/20 backdrop-blur-lg text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-primary/30">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-text-main text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-2">
                  {project.paragraph}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-6">
                    <Link
                      to={project.link}
                      className="text-text-muted hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Link2 />
                    </Link>
                    <Link
                      to={project.github}
                      className="text-text-muted hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Github />
                    </Link>
                  </div>
                  <Link
                    to={`/project/${project.id}`}
                    className="group/btn inline-flex items-center gap-2 text-primary font-bold text-xs tracking-[0.15em]"
                  >
                    Learn More
                    <MoveRight />
                    <span className="icon-long-arrow-right transition-transform duration-300 group-hover/btn:translate-x-2"></span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
