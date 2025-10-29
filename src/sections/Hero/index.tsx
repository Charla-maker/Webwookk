import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <section className="relative bg-slate-50 box-border caret-transparent mt-[-130px] overflow-hidden px-5 rounded-b-[40px] md:mt-[-132px] md:px-0">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[56.434%]">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full">
            <HeroContent />
            <section className="relative box-border caret-transparent w-full mt-[25px]">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
                <div className="relative box-border caret-transparent flex min-h-px w-full">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap w-full">
                    <div className="relative box-border caret-transparent max-w-full w-full md:w-auto">
                      <div className="box-border caret-transparent pr-0 md:pr-[30px]">
                        <div className="box-border caret-transparent text-left">
                          <a
                            href="https://sellmycars.com.au/how-to-sell-a-car/"
                            className="relative text-white text-xs font-semibold bg-amber-500 box-border caret-transparent inline-block tracking-[3.5px] leading-[14.4px] text-center uppercase text-nowrap align-middle px-[25px] py-[15px] rounded-lg md:text-sm md:leading-[16.8px] hover:bg-sky-950"
                          >
                            Sell a car
                            <i className="font-normal box-border caret-transparent inline-block leading-4 normal-case text-nowrap -translate-y-px align-middle ml-2.5 font-jkiticon before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[3.5px] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-jkiticon"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-center box-border caret-transparent max-w-full w-full md:w-auto">
                      <div className="box-border caret-transparent pt-5 md:pt-0">
                        <div className="box-border caret-transparent text-left">
                          <a
                            href="tel://1800 885 882"
                            className="relative text-neutral-800 text-[26px] font-semibold bg-transparent box-border caret-transparent inline-block tracking-[3.5px] leading-[31.2px] text-center uppercase text-nowrap align-middle rounded-lg md:text-sky-950 hover:text-amber-500 hover:border-amber-500"
                          >
                            1800 885 882{" "}
                            <i className="text-neutral-800 text-base font-normal box-border caret-transparent inline-block leading-4 normal-case text-nowrap -translate-y-px align-middle ml-2.5 font-jkiticon md:text-sky-950 before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[3.5px] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-jkiticon before:md:text-sky-950"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-amber-500 text-[17px] box-border caret-transparent text-right w-full">
                      <div className="box-border caret-transparent">
                        <div className="box-border caret-transparent">
                          <div className="box-border caret-transparent">
                            <div className="box-border caret-transparent">
                              <div className="box-border caret-transparent">
                                <p className="box-border caret-transparent mb-[14.4px]">
                                  <strong className="font-normal box-border caret-transparent">
                                    <em className="italic box-border caret-transparent">
                                      call us 7 days a week from 8am until 8pm
                                      (AEST/AEDT)
                                    </em>
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[43.566%]">
          <div className="relative content-center items-center bg-[linear-gradient(rgb(241,194,123)_0%,rgba(241,241,241,0)_70%)] box-border caret-transparent flex flex-wrap w-full mt-[50px] mx-5 rounded-t-[20px] md:ml-[50px] md:mr-20 md:mt-0 md:rounded-t-none">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};
