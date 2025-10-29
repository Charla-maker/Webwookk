export const NavbarLogo = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[70%] text-left w-[70%] md:max-w-[162px] md:w-[162px]">
      <div className="box-border caret-transparent pt-2.5">
        <a
          href="https://sellmycars.com.au/"
          className="text-amber-500 box-border caret-transparent inline-block hover:text-slate-700 hover:border-slate-700"
        >
          <img
            src="https://c.animaapp.com/mh5qprntqjweLB/assets/Red-Silver-Simple-Elegant-Car-Dealer-Logo-1.png"
            alt=""
            sizes="(max-width: 500px) 100vw, 500px"
            className="aspect-[auto_500_/_213] box-border caret-transparent inline-block max-w-full w-full"
          />
        </a>
      </div>
    </div>
  );
};
