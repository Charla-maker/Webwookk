export const CTACard = () => {
  return (
    <div className="relative content-start bg-amber-500 box-border caret-transparent flex flex-wrap w-full mr-0 p-[30px] rounded-[20px] md:mr-[15px] md:p-10">
      <div className="absolute bg-[url('https://sellmycars.com.au/wp-content/uploads/2024/11/Background-2@2x.png')] bg-no-repeat bg-cover box-border caret-transparent opacity-50 bg-center rounded-[20px] inset-0"></div>
      <div className="relative box-border caret-transparent w-full mb-5">
        <div className="box-border caret-transparent">
          <h2 className="text-white text-4xl font-medium box-border caret-transparent leading-[43.2px] uppercase font-oxanium md:text-5xl md:leading-[57.6px]">
            Let’s Sell Your Car
          </h2>
        </div>
      </div>
      <div className="relative text-white box-border caret-transparent w-full mb-5">
        <div className="box-border caret-transparent">
          Ready to sell your car? Get fast cash and free towing today!{" "}
        </div>
      </div>
      <div className="relative box-border caret-transparent w-full">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent text-left">
            <a
              href="https://sellmycars.com.au/how-to-sell-a-car/"
              className="relative text-white text-xs font-semibold bg-sky-950 box-border caret-transparent inline-block tracking-[3.5px] leading-[14.4px] text-center uppercase text-nowrap align-middle px-[25px] py-[15px] rounded-lg md:text-sm md:leading-[16.8px] hover:text-neutral-800 hover:bg-white hover:border-neutral-800"
            >
              Get a Quote{" "}
              <i className="font-normal box-border caret-transparent inline-block leading-4 normal-case text-nowrap -translate-y-px align-middle ml-2.5 font-jkiticon before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[3.5px] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-jkiticon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
