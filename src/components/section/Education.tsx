import { Heading } from "@components/index";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import eduerience from "@assets/lottieFiles/Experience.lottie";
import { educationData } from "@/data/educationData";

const Education = () => {
  return (
    <section className=" bg-[rgba(120,199,252,0.2)] mt-2 dark:bg-transparent">
      <div
        id="education"
        className="container max-w-7xl mx-auto px-6 relative py-8 
                 "
      >
        <Heading title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Animation */}
          <div className="hidden justify-center md:flex">
            <DotLottieReact
              src={eduerience}
              loop
              autoplay
              className="w-95 md:w-200 mx-auto"
            />
          </div>

          {/* Education cards */}
          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="
    rounded-xl p-6 flex flex-col items-center 
    bg-white dark:bg-surface 
    border border-gray-200 dark:border-primary 
    text-text-main-dark dark:text-text-main 
    shadow-md dark:shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(120,199,252,0.3)]
  "
              >
                <div className="text-xs mb-3 text-center text-primary-deep dark:text-primary-light">
                  ({edu.date})
                </div>

                <div className="flex items-center gap-4 w-full">
                  <div className="text-primary-dark dark:text-[#17e3ba]">
                    <edu.icon size={24} />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-semibold text-lg text-text-main-dark dark:text-text-main">
                      {edu.title}
                    </div>
                    <div className="text-sm text-text-muted-dark dark:text-primary-light">
                      {edu.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
