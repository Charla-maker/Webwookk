import { Shield, Clock, Truck, Award, DollarSign, Users } from "lucide-react";

export const ModernWhyUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Top Cash Offers",
      description: "We pay the highest prices for your vehicle - guaranteed fair market value.",
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Get your cash within hours. We work on your schedule, 365 days a year.",
    },
    {
      icon: Truck,
      title: "Free Towing",
      description: "Complimentary pickup and towing anywhere in Greater Sydney area.",
    },
    {
      icon: Shield,
      title: "No Hidden Fees",
      description: "What we quote is what you get. Transparent pricing, no surprises.",
    },
    {
      icon: Award,
      title: "Any Condition",
      description: "Running or not, damaged or pristine - we buy all vehicles.",
    },
    {
      icon: Users,
      title: "Trusted Service",
      description: "5000+ satisfied customers. Check our reviews and see why we're #1.",
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* Decorative Car Images */}
      <div className="absolute top-20 left-10 w-72 h-72 opacity-5 pointer-events-none hidden xl:block">
        <img
          src="https://c.animaapp.com/mh5qprntqjweLB/assets/cash-for-car-buyer-sydney.png"
          alt="Car"
          className="w-full h-full object-contain transform -rotate-12"
        />
      </div>
      <div className="absolute bottom-20 right-10 w-72 h-72 opacity-5 pointer-events-none hidden xl:block">
        <img
          src="https://c.animaapp.com/mh5qprntqjweLB/assets/cash-for-cars-247-melbourne.png"
          alt="Car"
          className="w-full h-full object-contain transform rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Sydney's Most Trusted Car Buyers
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            We've built our reputation on fast service, fair prices, and happy customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
