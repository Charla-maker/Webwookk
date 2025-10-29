import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <section className="relative bg-sky-950 box-border caret-transparent px-5 rounded-t-[40px] md:px-0">
      <div className="absolute bg-[url('https://sellmycars.com.au/wp-content/uploads/2024/11/Background-2@2x.png')] bg-no-repeat bg-cover box-border caret-transparent opacity-50 bg-center rounded-t-[40px] inset-0"></div>
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full">
            <section className="relative box-border caret-transparent w-full mt-20">
              <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
                <div className="relative box-border caret-transparent flex min-h-px w-full">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap w-full">
                    <FooterLogo />
                    <div className="relative text-stone-300 box-border caret-transparent text-center w-full mb-5">
                      <div className="box-border caret-transparent">
                        Sell Your Car, Truck, Ute, 4×4, or Van for Cash – Fast,
                        Safe &amp; Easy!
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent w-full mb-5">
                      <div className="box-border caret-transparent pt-0 md:pt-5">
                        <div className="box-border caret-transparent flex text-center py-2.5">
                          <span className="border-b-neutral-500 border-l-neutral-500 border-r-neutral-500 box-border caret-transparent flex w-full mx-auto border-t-white/20 border-t"></span>
                        </div>
                      </div>
                    </div>
                    <FooterLinks />
                    <div className="relative box-border caret-transparent w-full mb-5">
                      <div className="box-border caret-transparent">
                        <div className="box-border caret-transparent flex text-center py-2.5">
                          <span className="border-b-neutral-500 border-l-neutral-500 border-r-neutral-500 box-border caret-transparent flex w-full mx-auto border-t-white/20 border-t"></span>
                        </div>
                      </div>
                    </div>
                    <FooterCopyright />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
