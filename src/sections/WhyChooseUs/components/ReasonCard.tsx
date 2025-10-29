export type ReasonCardProps = {
  title: string;
  description: string;
  iconVariant: string;
  containerVariant: string;
  iconLineHeight: string;
  iconPaddingLeft: string;
};

export const ReasonCard = (props: ReasonCardProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
      <div
        className={`relative content-start box-border caret-transparent flex flex-wrap w-full ${props.containerVariant}`}
      >
        <div className="relative box-border caret-transparent w-full">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="relative bg-no-repeat bg-cover box-border caret-transparent text-left overflow-hidden bg-center rounded-[20px] before:accent-auto before:bg-size-[101%_101%] before:box-border before:caret-transparent before:text-neutral-500 before:block before:text-base before:not-italic before:normal-nums before:font-light before:h-full before:left-[-101%] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:top-0 before:font-poppins">
                <div className="relative box-border caret-transparent leading-[0px] z-[2]">
                  <div
                    className={`box-border caret-transparent inline-block h-[70px] w-[70px] mb-5 rounded-[50px] ${props.iconVariant} ${props.iconLineHeight} ${props.iconPaddingLeft}`}
                  >
                    <i
                      className={`text-[35px] font-normal box-border caret-transparent leading-[35px] font-jkiticon before:accent-auto before:box-border before:caret-transparent before:text-[35px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[35px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-jkiticon ${props.iconVariant}`}
                    ></i>
                  </div>
                </div>
                <div className="relative box-border caret-transparent z-[2]">
                  <h2 className="text-white text-[21px] font-medium box-border caret-transparent leading-[25.2px] uppercase pt-[3px] pb-2.5 font-oxanium md:text-[25px] md:leading-[30px]">
                    {props.title}
                  </h2>
                  <p className="text-stone-300 box-border caret-transparent mb-[14.4px]">
                    {props.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
