export type CarTypeCardProps = {
  iconUrl: string;
  title: string;
  iconVariant: string;
  cardVariant?: string;
};

export const CarTypeCard = (props: CarTypeCardProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full z-[2] md:w-[16.666%] md:z-auto">
      <div
        className={`relative content-start bg-white shadow-[rgba(0,0,0,0.05)_0px_5px_30px_0px] box-border caret-transparent flex flex-wrap justify-center w-full border mx-0 rounded-[20px] border-solid border-black/20 md:mx-2.5 ${props.cardVariant || ""}`}
      >
        <div className="relative box-border caret-transparent max-w-[95px] text-center w-[95px] z-[1] md:max-w-[50%] md:w-6/12">
          <div
            className={`box-border caret-transparent mb-[-68px] mt-[-50px] p-2.5 rounded-[50px] ${props.iconVariant}`}
          >
            <img
              src={props.iconUrl}
              alt=""
              className="aspect-[auto_76_/_76] box-border caret-transparent inline-block max-w-full w-full"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent w-full mb-[5px]">
          <div className="bg-slate-100 box-border caret-transparent rounded-t-[20px]">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent h-[70px]"></div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent text-center w-full">
          <div className="box-border caret-transparent px-2.5 py-5">
            <h2 className="text-neutral-800 text-[21px] font-medium box-border caret-transparent leading-[25.2px] uppercase font-oxanium">
              {props.title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
