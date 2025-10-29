import { ReasonCard } from "@/sections/WhyChooseUs/components/ReasonCard";

export const ReasonsGrid = () => {
  return (
    <section className="relative box-border caret-transparent w-full mt-[30px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[767px] mx-auto md:flex-nowrap md:max-w-[1140px]">
        <ReasonCard
          title="365 Days a Year"
          description="We’re open every day of the year, including holidays, to make selling your vehicle as convenient as possible."
          iconVariant="text-white bg-amber-500"
          containerVariant="pr-0 md:pr-[15px]"
          iconLineHeight="leading-[86px]"
          iconPaddingLeft="pl-[15px]"
        />
        <ReasonCard
          title="Free Towing"
          description="We provide free towing and vehicle removal, whether your car is running or not, making the process hassle-free."
          iconVariant="text-sky-950 bg-white"
          containerVariant="pl-0 pt-5 md:pl-[15px] md:pt-0"
          iconLineHeight="leading-[86px]"
          iconPaddingLeft="pl-[15px]"
        />
      </div>
    </section>
  );
};
