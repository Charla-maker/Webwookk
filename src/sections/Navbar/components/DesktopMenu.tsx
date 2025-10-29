export const DesktopMenu = () => {
  return (
    <div className="fixed bg-zinc-100 shadow-[rgba(255,165,0,0)_0px_10px_30px_0px] box-border caret-transparent flex flex-col-reverse h-full justify-end left-[-110%] max-w-[360px] overflow-x-hidden overflow-y-auto w-full z-[1000] top-0 md:static md:bg-transparent md:shadow-none md:block md:flex-row md:h-20 md:justify-normal md:max-w-none md:overflow-x-visible md:overflow-y-visible md:w-auto md:left-auto md:top-auto">
      <div className="box-border caret-transparent h-auto min-h-[auto] min-w-[auto] overflow-x-auto overflow-y-hidden md:h-full md:min-h-0 md:min-w-0 md:overflow-x-visible md:overflow-y-visible">
        <ul className="box-border caret-transparent block h-full justify-center list-none overflow-x-hidden overflow-y-auto pl-0 md:flex md:overflow-x-visible md:overflow-y-visible">
          <li className="static box-border caret-transparent block min-h-0 min-w-0 w-full md:relative md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto">
            <a
              href="https://sellmycars.com.au/"
              className="text-amber-500 text-sm font-semibold items-center box-border caret-transparent block h-full tracking-[2.5px] leading-[16.8px] min-h-0 min-w-0 uppercase w-auto pl-5 pr-0 py-[15px] md:flex md:min-h-[auto] md:min-w-[auto] md:w-full md:pr-5 md:py-5"
            >
              Home
            </a>
          </li>
          <li className="static box-border caret-transparent block min-h-0 min-w-0 w-full md:relative md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto">
            <a
              href="https://sellmycars.com.au/company/"
              className="text-neutral-800 text-sm font-semibold items-center box-border caret-transparent block h-full tracking-[2.5px] leading-[16.8px] min-h-0 min-w-0 uppercase w-auto pl-5 pr-0 py-[15px] md:flex md:min-h-[auto] md:min-w-[auto] md:w-full md:pr-5 md:py-5"
            >
              Company
            </a>
          </li>
          <li className="static box-border caret-transparent block min-h-0 min-w-0 w-full md:relative md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto">
            <a
              href="https://sellmycars.com.au/how-to-sell-a-car/"
              className="text-neutral-800 text-sm font-semibold items-center box-border caret-transparent block h-full tracking-[2.5px] leading-[16.8px] min-h-0 min-w-0 uppercase w-auto pl-5 pr-0 py-[15px] md:flex md:min-h-[auto] md:min-w-[auto] md:w-full md:pr-5 md:py-5"
            >
              How To Sell A Car
            </a>
          </li>
          <li className="static box-border caret-transparent block min-h-0 min-w-0 w-full md:relative md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto">
            <a
              href="https://sellmycars.com.au/faq/"
              className="text-neutral-800 text-sm font-semibold items-center box-border caret-transparent block h-full tracking-[2.5px] leading-[16.8px] min-h-0 min-w-0 uppercase w-auto pl-5 pr-0 py-[15px] md:flex md:min-h-[auto] md:min-w-[auto] md:w-full md:pr-5 md:py-5"
            >
               Faq
            </a>
          </li>
          <li className="static box-border caret-transparent block min-h-0 min-w-0 w-full md:relative md:flex md:min-h-[auto] md:min-w-[auto] md:w-auto">
            <a
              href="https://sellmycars.com.au/contact-us/"
              className="text-neutral-800 text-sm font-semibold items-center box-border caret-transparent block h-full tracking-[2.5px] leading-[16.8px] min-h-0 min-w-0 uppercase w-auto pl-5 pr-0 py-[15px] md:flex md:min-h-[auto] md:min-w-[auto] md:w-full md:pr-5 md:py-5"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full z-[5] py-2.5 md:static md:min-h-0 md:min-w-0 md:w-auto md:z-auto md:py-0">
        <div className="box-border caret-transparent inline-block md:hidden">
          <a
            href="https://sellmycars.com.au/"
            aria-label="Home Link"
            className="text-amber-500 box-border caret-transparent block mx-5 my-0 p-[5px] md:mx-0 md:my-[5px] hover:text-slate-700 hover:border-slate-700"
          >
            <img
              src="https://c.animaapp.com/mh5qprntqjweLB/assets/Red-Silver-Simple-Elegant-Car-Dealer-Logo-1.png"
              alt=""
              sizes="(max-width: 500px) 100vw, 500px"
              className="aspect-[auto_500_/_213] box-border caret-transparent max-w-[100px] object-cover w-[500px] md:max-w-[360px]"
            />
          </a>
        </div>
        <button
          aria-label="close-menu"
          className="relative text-white text-xs font-semibold bg-sky-950 caret-transparent block float-right tracking-[3.5px] leading-[14.4px] text-center uppercase text-nowrap w-[45px] z-10 mx-5 my-[5px] pl-5 pr-[30px] py-[15px] rounded-lg md:text-zinc-600 md:text-sm md:hidden md:leading-[16.8px] md:m-3 md:p-2 md:rounded-[3px] hover:bg-amber-500"
        >
          <img
            src="https://c.animaapp.com/mh5qprntqjweLB/assets/icon-2.svg"
            alt="Icon"
            className="text-white text-xs box-border caret-transparent leading-[14.4px] text-nowrap w-3 md:text-zinc-600 md:text-sm md:leading-[16.8px] md:w-3.5"
          />
        </button>
      </div>
    </div>
  );
};
