export type TestimonialCardProps = {
  variant: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  role: string;
  testimonialText: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
      <div
        className={`relative content-start box-border caret-transparent flex flex-wrap w-full ${props.variant}`}
      >
        <div className="relative box-border caret-transparent w-full">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="absolute box-border caret-transparent left-[-160000px]">
                    slide{" "}
                    <span className="box-border caret-transparent">1</span> of 1
                  </div>
                  <div className="box-border caret-transparent overflow-hidden">
                    <div className="box-border caret-transparent -mr-2.5">
                      <div className="text-[0px] box-border caret-transparent text-nowrap w-full">
                        <div className="text-base box-border caret-transparent inline-block align-top w-full pr-2.5">
                          <div
                            className={`relative ${props.variant === "pt-5 px-0 md:pt-0 md:px-2.5" ? "bg-sky-950 shadow-[rgba(0,0,0,0)_0px_0px_10px_0px]" : "bg-white shadow-[rgba(0,0,0,0.05)_0px_5px_30px_0px]"} box-border caret-transparent text-center border mt-0.5 mb-[120px] mx-0.5 px-[30px] py-2.5 rounded-[20px] border-solid border-black/20 md:px-10`}
                          >
                            <div className="box-border caret-transparent overflow-hidden">
                              <div className="absolute bottom-[-125px] box-border caret-transparent w-full z-[5] left-0">
                                <div className="box-border caret-transparent inline-flex">
                                  <img
                                    src={props.imageUrl}
                                    alt={props.imageAlt}
                                    sizes="(max-width: 2000px) 100vw, 2000px"
                                    className="aspect-[auto_2000_/_2000] bg-white box-border caret-transparent h-20 max-w-full object-cover w-20 rounded-[50%]"
                                  />
                                </div>
                                <ul className="relative box-border caret-transparent z-[2] pl-0"></ul>
                                <span className="relative box-border caret-transparent z-[2]">
                                  <strong className="text-neutral-800 text-[21px] font-medium box-border caret-transparent block leading-[25.2px] uppercase mt-2.5 mb-[5px] font-oxanium md:text-[25px] md:leading-[30px]">
                                    {props.name}
                                  </strong>
                                  <p className="box-border caret-transparent mb-[14.4px]">
                                    {props.role}
                                  </p>
                                </span>
                              </div>
                              <div className="relative box-border caret-transparent z-[2]">
                                <div className="text-neutral-400 text-[40px] box-border caret-transparent inline-flex z-[2]"></div>
                                <p
                                  className={`relative ${props.variant === "pt-5 px-0 md:pt-0 md:px-2.5" ? "text-stone-300 text-[19px]" : "text-[17px]"} italic box-border caret-transparent ${props.variant === "pt-5 px-0 md:pt-0 md:px-2.5" ? "leading-[28.5px]" : "leading-[25.5px]"} z-[2] mb-[35px] pb-[30px] ${props.variant === "pt-5 px-0 md:pt-0 md:px-2.5" ? "md:text-[22px] md:leading-[33px]" : "md:text-lg md:leading-[27px]"}`}
                                >
                                  {props.testimonialText}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
