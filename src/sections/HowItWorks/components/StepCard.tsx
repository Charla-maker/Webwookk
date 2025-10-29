export type StepCardProps = {
  stepNumber: string;
  title: string;
  description: string;
  href?: string;
  ariaLabel?: string;
  containerVariant?: string;
  iconVariant?: string;
  middleSectionVariant?: string;
  numberPadding?: string;
};

export const StepCard = (props: StepCardProps) => {
  const content = (
    <div className="relative bg-transparent bg-no-repeat bg-cover box-border caret-transparent text-center overflow-hidden bg-center pt-5 pb-2.5 px-[30px] rounded-[20px] md:pt-[25px] md:px-10 before:accent-auto before:bg-size-[101%_101%] before:box-border before:caret-transparent before:text-neutral-500 before:block before:text-base before:not-italic before:normal-nums before:font-light before:h-full before:left-[-101%] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:top-0 before:font-poppins">
      <div className="relative box-border caret-transparent z-[2]">
        <h2 className="text-neutral-800 text-[21px] font-medium box-border caret-transparent leading-[25.2px] uppercase mt-2 mb-4 font-oxanium md:text-[25px] md:leading-[30px]">
          {props.title}
        </h2>
        <p className="box-border caret-transparent mb-[14.4px]">
          {props.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
      <div
        className={`relative content-start shadow-[rgba(0,0,0,0.05)_0px_5px_30px_0px] box-border caret-transparent flex flex-wrap justify-center w-full border mx-0 rounded-[20px] border-solid border-black/20 md:mx-[15px] ${props.containerVariant || ""}`}
      >
        <div className="relative box-border caret-transparent max-w-[115px] w-[115px] z-[1] md:max-w-[30%] md:w-[30%]">
          <div
            className={`box-border caret-transparent mb-[-68px] mt-[-60px] p-[30px] rounded-[500px] ${props.iconVariant || ""}`}
          >
            <div className="box-border caret-transparent text-center">
              <div className="text-white text-[50px] box-border caret-transparent inline-block leading-[50px]">
                <i className="relative font-normal box-border caret-transparent block h-[50px] w-[50px] font-jkiticon before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-[50px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[50px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:translate-x-[-25px] before:visible before:border-separate before:left-2/4 before:font-jkiticon"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative box-border caret-transparent w-full ${props.middleSectionVariant || ""}`}
        >
          <div className="bg-slate-100 box-border caret-transparent rounded-t-[20px]">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent h-[95px]"></div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent w-full">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              {props.href ? (
                <a
                  href={props.href}
                  aria-label={props.ariaLabel}
                  className="box-border caret-transparent"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent max-w-[46px] w-[46px] md:max-w-[13%] md:w-[13%]">
          <div
            className={`bg-amber-500 box-border caret-transparent mb-[-25px] py-2.5 rounded-[500px] ${props.numberPadding || "pl-4"}`}
          >
            <h2 className="text-white text-lg box-border caret-transparent leading-[27px] md:text-xl md:leading-[30px]">
              {props.stepNumber}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
