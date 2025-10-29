import { Star } from "lucide-react";

export const ModernTestimonials = () => {
  const testimonials = [
    {
      name: "Spike Warren",
      location: "Parramatta, NSW",
      rating: 5,
      text: "Fast and easy process! I got a great offer for my car, and they picked it up within hours. Highly recommend!",
      image: "https://c.animaapp.com/mh5qprntqjweLB/assets/young-successful-businessman-checking-emails-while-having-morning-coffee.jpg",
    },
    {
      name: "Michael Chen",
      location: "Liverpool, NSW",
      rating: 5,
      text: "Fantastic service! The team was professional, and I got cash on the spot. The towing was free and quick too!",
      image: "https://c.animaapp.com/mh5qprntqjweLB/assets/stylish-man.jpg",
    },
    {
      name: "Nicole Roberts",
      location: "Blacktown, NSW",
      rating: 5,
      text: "Very pleased with the experience! I sold my old truck easily and got a fair price. Will definitely use them again!",
      image: "https://c.animaapp.com/mh5qprntqjweLB/assets/ready-to-help-and-serve-shot-of-a-young-businesswoman-working-in-a-call-center-.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Customer Reviews
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-secondary">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from real customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-secondary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
