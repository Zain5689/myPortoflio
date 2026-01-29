const Heading = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-10">
      <h1
        className="relative inline-block text-3xl font-bold tracking-widest
                     after:content-[''] after:absolute after:left-0 after:-bottom-2 text-primary
                     after:w-0 after:h-1 after:bg-primary
                     hover:after:w-full after:transition-all after:duration-300"
      >
        {title}
      </h1>
    </div>
  );
};
export default Heading;
