'use client'

import { Car, Truck, Bus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const CarShowcase = () => {
  const carImages = [
    {
      alt: "Luxury Vehicle",
      title: "Luxury Vehicles",
      description: "Top dollar for premium cars",
      carImage: "https://c.animaapp.com/mh5qprntqjweLB/img/luxury-car.jpg",
      link: "/luxury-vehicles"
    },
    {
      alt: "Family Car",
      title: "Family Cars",
      description: "Fair prices for all sedans",
      carImage: "https://c.animaapp.com/mh5qprntqjweLB/img/family-car.jpeg",
      link: "/family-cars" // Placeholder for future page
    },
    {
      alt: "SUV & 4x4",
      title: "SUVs & 4x4s",
      description: "Best offers for large vehicles",
      carImage: "https://c.animaapp.com/mh5qprntqjweLB/img/suv-and-van.jpeg",
      link: "/suvs-4x4s" // Placeholder for future page
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            We Buy All Types
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-secondary">
            Any Vehicle, Any Condition
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From luxury cars to work trucks, we buy them all
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {carImages.map((car, index) => (
            <Link
              key={index}
              href={car.link}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <Image
                  src={car.carImage}
                  alt={car.alt}
                  width={400} // Provide appropriate width
                  height={256} // Provide appropriate height (h-64 = 256px)
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{car.title}</h3>
                  <p className="text-white/90 text-sm">{car.description}</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">Get Cash Offer</span>
                  <svg className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Vehicle Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { icon: Car, label: "Sedans" },
            { icon: Truck, label: "Trucks" },
            { icon: Bus, label: "Vans" },
            { icon: Car, label: "SUVs" },
            { icon: Truck, label: "Utes" },
            { icon: Car, label: "4x4s" },
          ].map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border border-gray-100"
            >
              <type.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-gray-700">{type.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
