import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { ContactButton } from "@/sections/Navbar/components/ContactButton";

export const Navbar = () => {
  return (
    <section className="relative box-border caret-transparent z-[100] mt-5 px-5 py-0 rounded-[20px] md:mt-[30px] md:px-[3%] md:py-[0%]">
      <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap w-full">
            <section className="relative bg-white shadow-[rgba(0,0,0,0.05)_0px_5px_30px_0px] box-border caret-transparent w-full z-[100] border px-5 py-2.5 rounded-[20px] border-solid border-black/10 md:px-[25px]">
              <div className="relative box-border caret-transparent flex flex-wrap mx-auto md:flex-nowrap">
                <div className="relative box-border caret-transparent flex min-h-px w-6/12 md:w-[16.666%]">
                  <div className="relative content-center items-center box-border caret-transparent flex flex-wrap w-full">
                    <NavbarLogo />
                  </div>
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-6/12 md:w-[66.666%]">
                  <div className="relative content-center items-center box-border caret-transparent flex flex-wrap w-full">
                    <div className="relative box-border caret-transparent w-full">
                      <div className="box-border caret-transparent">
                        <div className="box-border caret-transparent">
                          <MobileMenuButton />
                          <DesktopMenu />
                          <div className="box-border caret-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[16.666%]">
                  <div className="relative content-center items-center box-border caret-transparent flex flex-wrap justify-center w-full md:justify-normal">
                    <div className="relative box-border caret-transparent w-full">
                      <div className="box-border caret-transparent pt-[13px] md:pt-0">
                        <div className="box-border caret-transparent text-center md:text-right">
                          <ContactButton />
                        </div>
                      </div>
                    </div>
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
