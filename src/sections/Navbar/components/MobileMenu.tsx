export const MobileMenu = () => {
  return (
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
  );
};
