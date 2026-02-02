import { Heading } from "@components/index";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Experience from "@assets/lottieFiles/Experience.lottie";
import { experiencesData } from "@/data/experiencesData";

const Education = () => {
  return (
    <div className="container max-w-7xl mx-auto px-6 relative py-8">
      <Heading title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
        {/* animation */}
        <div className="flex justify-center">
          <div className="">
            <DotLottieReact
              src={Experience}
              loop
              autoplay
              className="w-95 md:w-200  mx-auto"
            />
          </div>
        </div>

        {/* experiences list */}
        <div className="flex flex-col gap-8">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl p-6 flex flex-col items-center shadow-lg bg-[#f5f0fb] dark:bg-transparent dark:border dark:border-primary-dark  text-primary-dark"
            >
              {/* Date at top center */}
              <div className="text-xs mb-1 text-center dark:text-primary-light">
                ({exp.date})
              </div>

              {/* Icon + Job Title & Company */}
              <div className="flex items-center gap-4 w-full">
                {/* Icon */}
                <div className="text-secondary-gold">
                  <exp.icon size={24} />
                </div>

                {/* Title & Company */}
                <div className="flex flex-col">
                  <div className="font-semibold text-lg dark:text-white">
                    {exp.title}
                  </div>
                  <div className="text-sm dark:text-primary-light">
                    {exp.company}
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
