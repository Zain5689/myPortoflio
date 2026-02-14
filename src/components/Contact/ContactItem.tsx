const ContactItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center gap-5 group cursor-pointer transition-all duration-300 hover:translate-x-2">
    <div
      className="w-11 h-11 rounded-xl 
                    bg-gray-100 dark:bg-primary/10 
                    border border-gray-200 dark:border-primary/20 
                    flex items-center justify-center 
                    text-primary-dark dark:text-primary 
                    shadow-sm dark:shadow-[0_0_15px_rgba(120,199,252,0.1)] 
                    group-hover:text-black dark:group-hover:text-white 
                    group-hover:shadow-primary/40 
                    transition-all duration-500"
    >
      <div className="scale-110 transition-transform duration-300">{icon}</div>
    </div>

    <span
      className="text-base md:text-lg font-medium 
                     text-text-main-dark dark:text-text-muted 
                     group-hover:text-primary-dark dark:group-hover:text-text-main 
                     transition-colors duration-300"
    >
      {text}
    </span>
  </div>
);

export default ContactItem;
