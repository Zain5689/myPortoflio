import {
  About,
  Hero,
  Skills,
  Projects,
  Education,
  Contact,
} from "@components/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
export default Home;
