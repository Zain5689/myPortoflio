import { Outlet } from "react-router-dom";
import { Footer, Header, BackToTop } from "@components/index";
import { useContext } from "react";
import ParticlesBackground from "@components/ParticlesBackground";
import { ThemeContext } from "@/context/themeContext";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === "dark";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {darkMode && <ParticlesBackground />}

      <Header />
      <main className="pt-16 relative">
        <div className=" w-full ">
          <Outlet />
        </div>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
