import { Phone, Calendar, DollarSign } from "lucide-react";

export const ModernHowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Get Your Quote",
      description:
        "Call us or fill out our form with your car details. We'll give you an instant cash offer - no obligations.",
      color: "bg-primary",
    },
    {
      icon: Calendar,
      number: "02",
      title: "Schedule Pickup",
      description:
        "Accept our offer and we'll arrange a convenient time to pick up your vehicle. Free towing included!",
      color: "bg-accent",
    },
    {
      icon: DollarSign,
      number: "03",
      title: "Get Paid Cash",
      description:
        "We inspect your car, hand you cash on the spot, and tow it away. The whole process takes minutes!",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative Car Images */}
      <div className="absolute top-10 left-0 w-64 h-64 opacity-5 pointer-events-none">
        <img
          src="https://c.animaapp.com/mh5qprntqjweLB/assets/cash-for-car-buyer-sydney.png"
          alt="Car"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-10 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <img
          src="https://c.animaapp.com/mh5qprntqjweLB/assets/cash-for-cars-247-melbourne.png"
          alt="Car"
          className="w-full h-full object-contain transform scale-x-[-1]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Simple Process
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-secondary">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to turn your car into cash today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-20"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative z-10">
                <div
                  className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute top-0 right-0 text-6xl font-bold text-gray-100">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
