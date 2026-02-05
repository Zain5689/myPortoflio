import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full flex items-center justify-center
        bg-linear-to-tr from-primary to-primary-dark
        text-text-main shadow-lg
        transition-all duration-500
        hover:scale-110 hover:shadow-[0_0_20px_rgba(120,199,252,0.4)]
        cursor-pointer 
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;
