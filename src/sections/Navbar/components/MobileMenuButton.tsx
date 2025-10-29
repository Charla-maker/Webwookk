export const MobileMenuButton = () => {
  return (
    <button
      aria-label="open-menu"
      className="relative text-white text-xs font-semibold bg-amber-500 caret-transparent block float-right tracking-[3.5px] leading-[14.4px] text-center uppercase text-nowrap pl-[19px] pr-4 py-[15px] rounded-lg md:text-zinc-600 md:text-sm md:hidden md:leading-[16.8px] md:px-[25px] hover:bg-sky-950"
    >
      <img
        src="https://c.animaapp.com/mh5qprntqjweLB/assets/icon-1.svg"
        alt="Icon"
        className="text-white text-xs box-border caret-transparent leading-[14.4px] text-nowrap w-3 md:text-zinc-600 md:text-sm md:leading-[16.8px] md:w-3.5"
      />
    </button>
  );
};
