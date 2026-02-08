import { useContext, useEffect, useState } from "react";
import { CircleX, Github, Linkedin, Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { navData } from "@data/navItem";
import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, themeSwitchHandler } = useContext(ThemeContext);

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
        className={`fixed top-0 w-full z-50 font-poppins transition-all duration-300 ${
          scrolled
            ? `backdrop-blur-md shadow-md border-b border-primary/20 ${
                theme === "dark" ? "bg-black/60" : "bg-white/70"
              }`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-primary-dark dark:text-primary
            shadow-none dark:drop-shadow-[0_0_8px_rgba(95,45,237,0.4)]"
          >
            Zainab Hilal
          </Link>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              aria-label="Toggle Dark Mode"
              className="relative p-2.5 text-primary-dark dark:text-primary rounded-xl bg-primary/15 dark:bg-primary-dark/20 hover:bg-primary/25 dark:hover:bg-primary-dark/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(120,199,252,0.2)] active:scale-90 group"
              onClick={() =>
                themeSwitchHandler(theme === "dark" ? "light" : "dark")
              }
            >
              {theme === "dark" ? <Moon size={23} /> : <Sun size={23} />}
            </button>

            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2.5 text-primary-dark dark:text-primary rounded-xl bg-primary/15 hover:bg-primary/25 transition-all duration-300 active:scale-90"
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
        className={`fixed top-0 left-0 h-full w-72 z-60 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out border-r border-primary/20 shadow-2xl backdrop-blur-xl ${
          theme === "dark" ? "bg-[#0a0a0a]/95" : "bg-white/95"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu}>
            <CircleX className="text-primary-dark dark:text-primary w-9 h-9 hover:scale-110 transition" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navData.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.name.toLowerCase())}
              className="group flex items-center gap-4 w-full border-2 
              border-primary/40 dark:border dark:border-primary/20 rounded-2xl px-6 py-4 transition-all duration-300 ease-out cursor-pointer outline-none hover:-translate-y-1 active:scale-[0.98] dark:text-primary dark:hover:bg-primary dark:hover:text-black text-primary-dark hover:bg-primary-dark hover:text-white"
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
          <Link
            to="https://www.linkedin.com/in/zainab-hilal-b5b031225/"
            target="_blank"
            rel="noreferrer"
            className="text-primary-dark dark:text-primary border border-primary/40 p-3 rounded-full hover:bg-primary-dark
            dark:hover:bg-primary hover:text-text-main-dark dark:hover:text-text-main transition"
          >
            <Linkedin />
          </Link>
          <Link
            to="https://github.com/Zain5689"
            target="_blank"
            rel="noreferrer"
            className="text-primary-dark dark:text-primary border border-primary/40 p-3 rounded-full hover:bg-primary-dark
            dark:hover:bg-primary hover:text-text-main-dark dark:hover:text-text-main transition"
          >
            <Github />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
