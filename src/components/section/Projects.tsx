import { useState } from "react";
import { Github, Link2, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading } from "@components/index";
import { projects } from "@data/projects";
import { categories } from "@data/categories";

const Projects = () => {
  const [active, setActive] = useState("all");
  const filteredProjects =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 px-6 relative overflow-hidden ">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

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
                    ? "bg-primary text-white shadow-[0_10px_20px_rgba(95,45,237,0.3)] -translate-y-1"
                    : "bg-surface/30 text-text-muted border border-white/5 hover:border-primary/30 hover:text-primary backdrop-blur-sm"
                }
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-surface/20 rounded-2xl border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-90"></div>

                  <span className="absolute top-5 left-5 bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-primary/30 z-10">
                    {project.category}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-text-main text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-2 min-h-[40px]">
                    {project.paragraph}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-6">
                      <Link
                        to={project.link}
                        target="_blank"
                        className="text-text-muted hover:text-primary transition-all duration-300 hover:scale-125"
                      >
                        <Link2 size={20} />
                      </Link>
                      <Link
                        to={project.github}
                        target="_blank"
                        className="text-text-muted hover:text-primary transition-all duration-300 hover:scale-125"
                      >
                        <Github size={20} />
                      </Link>
                    </div>
                    <Link
                      to={`/project/${project.id}`}
                      className="group/btn inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase transition-all"
                    >
                      Learn More
                      <MoveRight
                        size={18}
                        className="transition-transform duration-300 group-hover/btn:translate-x-2"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface/10 rounded-3xl border border-dashed border-white/10">
            <p className="text-text-muted text-lg italic">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
