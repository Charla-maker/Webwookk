import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";

export const TestimonialGrid = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
      <TestimonialCard
        variant="pr-0 md:pr-5"
        imageUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/young-successful-businessman-checking-emails-while-having-morning-coffee.jpg"
        imageAlt="Spike Warren"
        name="Spike Warren"
        role="Our Customer"
        testimonialText="Fast and easy process! I got a great offer for my car, and they picked it up within hours. Highly recommend!"
      />
      <TestimonialCard
        variant="pt-5 px-0 md:pt-0 md:px-2.5"
        imageUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/stylish-man.jpg"
        imageAlt="Michael"
        name="Michael"
        role="Our Customer"
        testimonialText="Fantastic service! The team was professional, and I got cash on the spot. The towing was free and quick too!"
      />
      <TestimonialCard
        variant="pl-0 pt-5 md:pl-5 md:pt-0"
        imageUrl="https://c.animaapp.com/mh5qprntqjweLB/assets/ready-to-help-and-serve-shot-of-a-young-businesswoman-working-in-a-call-center-.jpg"
        imageAlt="Nicole"
        name="Nicole"
        role="Our Customer"
        testimonialText="Very pleased with the experience! I sold my old truck easily and got a fair price. Will definitely use them again!"
      />
    </div>
  );
};
