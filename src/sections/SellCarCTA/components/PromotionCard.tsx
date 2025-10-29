export const PromotionCard = () => {
  return (
    <section className="relative box-border caret-transparent w-full">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full p-[30px] md:pl-[60px] md:pr-0 md:py-[60px]">
            <div className="relative box-border caret-transparent w-full mb-[5px]">
              <div className="box-border caret-transparent">
                <h2 className="text-white text-4xl font-medium box-border caret-transparent leading-[43.2px] uppercase font-oxanium md:text-5xl md:leading-[57.6px]">
                  Get More for Your Car!
                </h2>
              </div>
            </div>
            <div className="relative text-stone-300 box-border caret-transparent w-full mb-[5px]">
              <div className="box-border caret-transparent mr-[55px]">
                <p className="box-border caret-transparent mb-[14.4px]">
                  “Get more cash for your car today! We offer the best value for
                  your vehicle, with free towing and instant payment on the
                  spot.{" "}
                  <b className="font-normal box-border caret-transparent">
                    Conditions apply
                  </b>
                  “
                </p>
              </div>
            </div>
            <div className="relative box-border caret-transparent w-full">
              <div className="box-border caret-transparent pt-5">
                <div className="box-border caret-transparent text-left">
                  <a
                    href="https://sellmycars.com.au/contact-us/"
                    className="relative text-white text-xs font-semibold bg-amber-500 box-border caret-transparent inline-block tracking-[3.5px] leading-[14.4px] text-center uppercase text-nowrap align-middle px-[25px] py-[15px] rounded-lg md:text-sm md:leading-[16.8px] hover:text-neutral-800 hover:bg-white hover:border-neutral-800"
                  >
                    Get Your Offer Now
                    <i className="font-normal box-border caret-transparent inline-block leading-4 normal-case text-nowrap -translate-y-px align-middle ml-2.5 font-jkiticon before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[3.5px] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-jkiticon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
          <div className="relative content-center items-center box-border caret-transparent flex flex-wrap w-full">
            <div className="relative box-border caret-transparent text-center w-full">
              <div className="box-border caret-transparent ml-0 md:ml-[-70px]">
                <img
                  src="https://c.animaapp.com/mh5qprntqjweLB/assets/bannerbgsmall.png"
                  alt="cash-for-car"
                  className="aspect-[auto_300_/_183] box-border caret-transparent inline-block max-w-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
