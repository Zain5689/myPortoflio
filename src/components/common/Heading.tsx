const Heading = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-12">
      <h1
        className="
        relative inline-block
        text-4xl md:text-5xl font-bold tracking-widest
        text-primary
        drop-shadow-[0_0_10px_rgba(120,199,252,0.1)]
        after:content-['']
        after:absolute after:left-1/2 after:-translate-x-1/2
        after:-bottom-5
        after:w-[50%] after:h-1.5
        after:rounded-full
        after:bg-linear-to-r after:from-primary after:to-text-muted
        after:transition-all after:duration-500
        hover:after:w-full
        "
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
