import { Heading } from "@components/index";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import eduerience from "@assets/lottieFiles/Experience.lottie";
import { educationData } from "@/data/educationData";

const Education = () => {
  return (
    <div className="container max-w-7xl mx-auto px-6 relative py-8">
      <Heading title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
        <div className="hidden justify-center md:flex">
          <div className="">
            <DotLottieReact
              src={eduerience}
              loop
              autoplay
              className="w-95 md:w-200  mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="rounded-xl p-6 flex flex-col items-center shadow-lg   text-text-main border border-primary"
            >
              <div className="text-xs mb-3 text-center dark:text-primary-light">
                ({edu.date})
              </div>

              <div className="flex items-center gap-4 w-full">
                <div className="text-primary">
                  <edu.icon size={24} />
                </div>

                <div className="flex flex-col">
                  <div className="font-semibold text-lg dark:text-white">
                    {edu.title}
                  </div>
                  <div className="text-sm dark:text-primary-light">
                    {edu.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Education;
