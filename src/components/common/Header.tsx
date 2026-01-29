import { useEffect, useState } from "react";
import { CircleX, Github, Linkedin, Menu } from "lucide-react";
import { Link } from "react-router";
import { navData } from "../../data/navItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [scrolled, setScrolled] = useState(false);

  // Blur effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed w-full z-50 font-poppins transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/50 shadow-md border-b border-gray-200 dark:border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo with Glow Effect */}
        <Link
          to="/"
          className="text-2xl font-bold text-primary drop-shadow-[0_0_8px_rgba(167,209,41,0.5)]"
        >
          Zainab Hilal
        </Link>

        {/* Menu Toggle Button */}
        <button
          className="p-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-full active:scale-90"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={28} className="stroke-[2px]" />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#0a0a0a]/95 backdrop-blur-xl text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[60] border-r border-primary/20 shadow-2xl`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="group p-1"
            aria-label="Close menu"
          >
            <CircleX className="text-primary w-9 h-9 group-hover:scale-110 transition-all duration-300" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navData.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-4 text-primary border border-primary/30 rounded-2xl px-6 py-4 hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(167,209,41,0.4)] transition-all duration-300 text-lg font-medium group"
              onClick={toggleMenu}
            >
              <item.icon
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="social flex p-2 mx-10 items-center gap-5  ">
          <Link
            to={""}
            className="text-primary border border-primary/30 p-3 rounded-full hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(167,209,41,0.4)] transition-all duration-300"
          >
            <Linkedin />
          </Link>
          <Link
            to={""}
            className="text-primary border border-primary/30  p-3 rounded-full hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(167,209,41,0.4)] transition-all duration-300"
          >
            <Github />
          </Link>
        </div>
      </div>

      {/* Enhanced Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-55 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
