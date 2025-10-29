export type FooterColumnProps = {
  title: string;
  variant: string;
  links?: Array<{
    href: string;
    text: string;
    icon?: string;
  }>;
  socialLinks?: Array<{
    href: string;
    icon: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
      <div
        className={`relative content-start box-border caret-transparent flex flex-wrap w-full ${props.variant === "explore" ? "" : props.variant === "contact" ? "pt-10 px-0 md:pl-2.5 md:pr-[120px] md:pt-0" : "pt-10 md:pt-0"}`}
      >
        <div className="relative box-border caret-transparent w-full mb-5">
          <div className="box-border caret-transparent">
            <h2 className="text-white text-[21px] font-medium box-border caret-transparent leading-[25.2px] uppercase font-oxanium md:text-[25px] md:leading-[30px]">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="relative box-border caret-transparent w-full">
          {props.variant === "social" ? (
            <div className="box-border caret-transparent text-left pt-0 md:pt-5">
              <div className="box-border caret-transparent gap-x-[15px] inline-grid grid-cols-[repeat(4,auto)] justify-center justify-items-center gap-y-2.5">
                {props.socialLinks?.map((link, index) => (
                  <span
                    key={index}
                    className="box-border caret-transparent block"
                  >
                    <a
                      href={link.href}
                      className="text-amber-500 text-xl items-center bg-amber-500 box-border caret-transparent inline-flex h-10 justify-center leading-5 text-center w-10 rounded-lg hover:text-white hover:border-white"
                    >
                      <img
                        src={link.icon}
                        alt="Icon"
                        className="relative box-border caret-transparent h-5 w-5"
                      />
                    </a>
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="box-border caret-transparent pt-0 md:pt-5">
              <ul className="box-border caret-transparent list-none pl-0">
                {props.links?.map((link, index) => (
                  <li
                    key={index}
                    className={`relative items-center box-border caret-transparent flex ${props.variant === "explore" ? (index === 0 ? "pb-[3.5px]" : index === props.links.length - 1 ? "mt-[3.5px]" : "mt-[3.5px] pb-[3.5px]") : index === 0 ? "pb-2.5" : "mt-2.5"}`}
                  >
                    <a
                      href={link.href}
                      className="text-amber-500 items-center box-border caret-transparent flex w-full hover:text-slate-700 hover:border-slate-700"
                    >
                      {link.icon && (
                        <span className="relative box-border caret-transparent flex pr-2.5 top-0">
                          <img
                            src={link.icon}
                            alt="Icon"
                            className="box-border caret-transparent h-4 w-4 mr-1"
                          />
                        </span>
                      )}
                      <span
                        className={`text-stone-300 box-border caret-transparent block ${link.icon ? "self-center pl-[5px]" : ""}`}
                      >
                        {link.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
