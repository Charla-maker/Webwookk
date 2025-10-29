import { CTACard } from "@/sections/SellCarCTA/components/CTACard";
import { PromotionCard } from "@/sections/SellCarCTA/components/PromotionCard";

export const SellCarCTA = () => {
  return (
    <section className="relative box-border caret-transparent my-0 px-5 md:my-24 md:px-0">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[33.333%]">
          <CTACard />
        </div>
        <div className="relative box-border caret-transparent flex min-h-px w-full md:w-[66.666%]">
          <div className="relative content-center items-center bg-sky-950 box-border caret-transparent flex flex-wrap w-full ml-0 mt-[30px] rounded-[20px] md:ml-[15px] md:mt-0">
            <div className="absolute bg-[url('https://sellmycars.com.au/wp-content/uploads/2024/11/Background-2@2x.png')] bg-no-repeat bg-cover box-border caret-transparent opacity-50 bg-center rounded-[20px] inset-0"></div>
            <PromotionCard />
          </div>
        </div>
      </div>
    </section>
  );
};
