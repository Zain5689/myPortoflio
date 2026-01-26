import { Link } from "react-router";
import { Home, AlertTriangle } from "lucide-react";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center">
      {/* Icon with Glowing Effect */}
      <div className="relative mb-8">
        <AlertTriangle
          size={100}
          className="text-primary animate-pulse drop-shadow-[0_0_15px_rgba(167,209,41,0.8)]"
        />
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-9xl font-black text-primary/10 select-none">
          404
        </span>
      </div>

      {/* Text Content */}
      <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-4">
        Oops! Page <span className="text-primary">Lost</span>
      </h1>

      <p className="text-gray-400 max-w-md mb-10 font-roboto text-lg">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Action Button */}
      <Link
        to="/"
        className="flex items-center gap-3 bg-primary text-black font-bold px-8 py-4 rounded-2xl hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(167,209,41,0.5)] transition-all duration-300 group"
      >
        <Home
          size={20}
          className="group-hover:-translate-y-1 transition-transform"
        />
        Back to Home
      </Link>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Error;
