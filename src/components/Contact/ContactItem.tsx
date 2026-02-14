const ContactItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div
    className="group relative flex items-center gap-4 cursor-pointer 
               px-4 py-3 rounded-xl
               transition-all duration-500
               hover:translate-x-2 hover:bg-primary/5 dark:hover:bg-primary/10"
  >
    <div
      className="relative w-11 h-11 rounded-xl 
                 bg-primary-dark dark:bg-primary 
                 text-white dark:text-black
                 border border-primary/30
                 flex items-center justify-center 
                 transition-all duration-500
                 group-hover:scale-110
                 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
    >
      {icon}
    </div>

    <span
      className="text-base md:text-lg font-semibold 
                 text-text-main-dark dark:text-text-muted
                 transition-all duration-300
                 group-hover:text-primary"
    >
      {text}
    </span>
  </div>
);

export default ContactItem;
