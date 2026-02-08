const Footer = () => {
  return (
    <footer
      className="
        w-full py-4 text-center 
        dark:bg-transparent bg-primary-dark backdrop-blur-md 
        border-t border-primary/20
        text-text-main
        transition-colors duration-500
      "
    >
      <div className="container mx-auto px-4">
        <p className="font-poppins tracking-widest uppercase text-sm font-semibold">
          © {new Date().getFullYear()}
          <span className="text-primary-light dark:text-primary ml-2">
            Zainab Hilal
          </span>{" "}
          | Crafted with Heart
        </p>

        <div className="flex justify-center gap-4 mt-2">
          <div className="w-8 h-0.5 bg-primary/50"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <div className="w-8 h-0.5 bg-primary/50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
