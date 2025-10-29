import { CarTypeCard } from "@/sections/PopularCars/components/CarTypeCard";

export const CarTypeGrid = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-wrap max-w-[1320px] mx-auto md:flex-nowrap">
      <CarTypeCard
        iconUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/Icon-1_2@2x.png"
        title="Sports"
        iconVariant="bg-sky-950"
      />
      <CarTypeCard
        iconUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/Icon-2_1@2x.png"
        title="Sedan"
        iconVariant="bg-amber-500"
        cardVariant="mt-[105px]"
      />
      <CarTypeCard
        iconUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/Icon-3_1@2x.png"
        title="FAMILY MPV​"
        iconVariant="bg-sky-950"
        cardVariant="mt-[105px]"
      />
      <CarTypeCard
        iconUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/Icon-4_1@2x.png"
        title="Limousine"
        iconVariant="bg-amber-500"
        cardVariant="mt-[105px]"
      />
      <CarTypeCard
        iconUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/Icon-5_2@2x.png"
        title="Sports Coupe"
        iconVariant="bg-sky-950"
        cardVariant="mt-[105px]"
      />
      <CarTypeCard
        iconUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/Icon-6_1@2x.png"
        title="Pick-Up"
        iconVariant="bg-amber-500"
        cardVariant="mt-[105px]"
      />
    </div>
  );
};
