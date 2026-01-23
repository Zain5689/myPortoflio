import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
// import BackToTop from "@/components/common/BackToTop/BackToTop";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import ParticlesBackground from "../../components/ParticlesBackground";

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
      {/* <BackToTop /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
