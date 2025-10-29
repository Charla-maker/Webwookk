import { StepCard } from "@/sections/HowItWorks/components/StepCard";

export const StepsGrid = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
      <StepCard
        stepNumber="01"
        title="Get a Free Quote"
        description="Contact us with details about your car, truck, Ute, or 4x4. We’ll provide you with a quick, accurate cash offer"
        href="https://sellmycars.com.au/contact-us/"
        ariaLabel="Car List"
        containerVariant=""
        iconVariant="bg-sky-950"
        middleSectionVariant=""
        numberPadding="pl-4"
      />
      <StepCard
        stepNumber="02"
        title="Schedule Pickup"
        description="Accept the offer, and we’ll arrange a time to pick up your vehicle – with free towing included."
        containerVariant="mt-[120px] md:mt-0"
        iconVariant="bg-amber-500"
        numberPadding="pl-3.5"
      />
      <StepCard
        stepNumber="03"
        title="Get Paid Cash"
        description="Once we assess your car, we’ll pay you cash on the spot. Quick, easy, and hassle-free!"
        href="tel://1800 885 882"
        ariaLabel="Review Us"
        containerVariant="mt-[120px]"
        iconVariant="bg-sky-950"
        middleSectionVariant="max-w-full"
        numberPadding="pl-3.5"
      />
    </div>
  );
};
