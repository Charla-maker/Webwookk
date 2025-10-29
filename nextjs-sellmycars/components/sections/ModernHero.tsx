'use client'

import { Button } from "@/components/ui/Button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

export const ModernHero = () => {
  return (
    <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-accent text-secondary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                #1 Cash For Cars Sydney
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Sell Your Car
              <span className="block text-primary">Get Cash Today</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Fast, fair, and hassle-free. We buy any car, truck, ute, or 4x4 in any condition. 
              <strong className="text-secondary"> Free towing. Cash on the spot.</strong>
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base text-gray-700">Instant cash offers - no waiting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base text-gray-700">Free towing anywhere in Sydney</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base text-gray-700">Open 365 days - 8am to 8pm</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button href="tel:0420587575" variant="secondary" size="lg" className="group">
                <Phone className="mr-2 w-5 h-5" />
                Call: 0420 587 575
              </Button>
              <Button href="#quote" variant="outline" size="lg" className="group">
                Scroll to Form
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <div>
                  <div className="text-2xl font-bold text-secondary">$100-$30K</div>
                  <div className="text-xs text-gray-600">Cash Paid</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">2 Hours</div>
                  <div className="text-xs text-gray-600">Average Pickup</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">5000+</div>
                  <div className="text-xs text-gray-600">Cars Bought</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" id="quote">
            <div className="absolute -top-20 -right-20 w-96 h-96 opacity-10 pointer-events-none hidden lg:block">
              <Image
                src="https://c.animaapp.com/mh5qprntqjweLB/assets/Teal-Green-and-White-Minimalist-Moving-Announcement-Instagram-Post-1.png"
                alt="Car"
                width={384}
                height={384}
                className="w-full h-full object-contain transform rotate-12"
              />
            </div>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
