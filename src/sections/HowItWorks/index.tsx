import { StepsGrid } from "@/sections/HowItWorks/components/StepsGrid";

export const HowItWorks = () => {
  return (
    <section className="relative box-border caret-transparent z-[1] my-[150px] px-5 md:px-0">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full rounded-[20px]">
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent">
                <h2 className="text-neutral-800 text-4xl font-medium box-border caret-transparent leading-[43.2px] uppercase font-oxanium md:text-5xl md:leading-[57.6px]">
                  How It Works
                </h2>
              </div>
            </div>
            <div className="relative box-border caret-transparent text-center w-full mb-5">
              <div className="box-border caret-transparent px-0 md:px-[350px]">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent">
                        <p className="box-border caret-transparent mb-[14.4px]">
                          Follow these simple steps to sell your vehicle quickly
                          and get cash on the spot!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="relative box-border caret-transparent w-full mt-[90px]">
              <StepsGrid />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
