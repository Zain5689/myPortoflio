import { useState } from "react";
import { CircleX, Menu } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 font-serif transition-all text-primary ">
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between p-4">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-bold">
          Zainab Hilal
        </Link>

        {/* Toggle Button - always visible */}
        <button
          className="text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <CircleX /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (or Side Menu for all screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#000000] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col justify-center  p-6 space-y-6">
          <Link
            to={"/"}
            className="text-primary border-primary border-2 rounded-md px-3 py-1 hover:bg-primary hover:text-black transition"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="text-primary border-primary border-2 rounded-md px-3 py-1 hover:bg-primary hover:text-black transition cursor-pointer"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to={"/"}
            className="text-primary border-primary border-2 rounded-md px-3 py-1 hover:bg-primary hover:text-black transition"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to={"/"}
            className="text-primary border-primary border-2 rounded-md px-3 py-1 hover:bg-primary hover:text-black transition"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to={"/"}
            className="text-primary border-primary border-2 rounded-md px-3 py-1 hover:bg-primary hover:text-black transition"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
