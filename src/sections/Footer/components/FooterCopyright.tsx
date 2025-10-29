export const FooterCopyright = () => {
  return (
    <section className="relative box-border caret-transparent w-full mt-px mb-5">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full">
            <div className="relative text-stone-300 box-border caret-transparent text-center w-full md:text-start">
              <div className="box-border caret-transparent text-center md:text-start">
                <p className="box-border caret-transparent text-center mb-[14.4px] md:text-start">
                  Copyright ©2025{" "}
                  <a
                    href="https://www.sellmycars.com.au/"
                    className="text-amber-500 box-border caret-transparent text-center md:text-start hover:text-slate-700 hover:border-slate-700"
                  >
                    Sellmycar.com.au
                  </a>
                   | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-6/12">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full pt-2.5 md:pt-0">
            <div className="relative text-stone-300 box-border caret-transparent text-center w-full md:text-right">
              <div className="box-border caret-transparent text-center md:text-right">
                <div className="box-border caret-transparent text-center md:text-right">
                  <div className="box-border caret-transparent text-center md:text-right">
                    Design &amp; Developed by:{" "}
                    <a
                      href="http://evalise.com.au/"
                      className="text-amber-500 box-border caret-transparent text-center md:text-right hover:text-slate-700 hover:border-slate-700"
                    >
                      Evalise
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
