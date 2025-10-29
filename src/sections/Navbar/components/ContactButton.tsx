export const ContactButton = () => {
  return (
    <a
      href="tel://0420 587 575"
      className="relative text-white text-xs font-semibold bg-amber-500 box-border caret-transparent inline-block tracking-[3.5px] leading-[14.4px] text-center uppercase text-nowrap align-middle w-[248px] px-[25px] py-[15px] rounded-lg md:text-sm md:leading-[16.8px] md:w-auto hover:bg-sky-950"
    >
      <i className="font-normal box-border caret-transparent inline-block leading-4 normal-case text-nowrap -translate-y-px align-middle mr-2.5 font-jkiticon before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[3.5px] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-jkiticon"></i>
      0420 587 575
    </a>
  );
};
