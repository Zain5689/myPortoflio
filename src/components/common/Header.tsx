import { useEffect, useState } from "react";
import { CircleX, Github, Linkedin, Menu, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { navData } from "../../data/navItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  };
  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 font-poppins transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/60 shadow-md border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-primary drop-shadow-[0_0_8px_rgba(95,45,237,0.4)]"
          >
            Zainab Hilal
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              aria-label="Toggle Dark Mode"
              className="relative p-2.5 text-primary rounded-xl bg-primary/5 hover:bg-primary/15 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,199,252,0.2)] active:scale-90 group"
            >
              <Moon size={23} className="transition-transform duration-500" />
            </button>

            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2.5 text-primary rounded-xl bg-primary/5 hover:bg-primary/15 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,199,252,0.2)] active:scale-90"
            >
              <Menu size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          onClick={toggleMenu}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-60
        bg-[#0a0a0a]/95 backdrop-blur-xl
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-500 ease-in-out
        border-r border-primary/20 shadow-2xl`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu}>
            <CircleX className="text-primary w-9 h-9 hover:scale-110 transition" />
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          {navData.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.name.toLowerCase())}
              className="
    group flex items-center gap-4 w-full
    text-primary border border-primary/20
    rounded-2xl px-6 py-4
    hover:bg-primary hover:text-black hover:shadow
    -[0_0_20px_rgba(120,199,252,0.3)]
    hover:-translate-y-1 active:scale-[0.98]
    transition-all duration-300 ease-out
    cursor-pointer outline-none"
            >
              <item.icon
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-bold tracking-[0.2em] uppercase text-xs">
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex p-6 gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-primary border border-primary/30 p-3 rounded-full hover:bg-primary hover:text-black transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-primary border border-primary/30 p-3 rounded-full hover:bg-primary hover:text-black transition"
          >
            <Github />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
