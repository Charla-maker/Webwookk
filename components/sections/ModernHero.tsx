import { Button } from "@/components/ui/Button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import { getHeroContent } from "@/lib/sanity/queries";

// Fallback hero content if Sanity CMS is empty
const fallbackHeroContent = {
  badge: "#1 Cash For Cars Sydney",
  headline: "Sell Your Car Get Cash Today",
  subheadline: "Fast, fair, and hassle-free. We buy any car, truck, ute, or 4x4 in any condition. Free towing. Cash on the spot.",
  benefits: [
    "Instant cash offers - no waiting",
    "Free towing anywhere in Sydney",
    "Open 365 days - 8am to 8pm"
  ],
  stats: [
    {
      value: "$100-$30K",
      label: "Cash Paid",
      description: "Cash Paid"
    },
    {
      value: "2 Hours",
      label: "Average Pickup",
      description: "Average Pickup"
    },
    {
      value: "5000+",
      label: "Cars Bought",
      description: "Cars Bought"
    }
  ]
};

export const ModernHero = async () => {
  // Fetch hero content from Sanity CMS
  const sanityHeroContent = await getHeroContent();

  // Use Sanity data if available, otherwise fall back to hardcoded data
  const heroContent = sanityHeroContent || fallbackHeroContent;
  return (
    <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-accent text-secondary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                {heroContent.badge}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              {heroContent.headline.split(' ').slice(0, 3).join(' ')}
              <span className="block text-primary">{heroContent.headline.split(' ').slice(3).join(' ')}</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {heroContent.subheadline}
            </p>

            <div className="space-y-3">
              {heroContent.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base text-gray-700">{benefit}</span>
                </div>
              ))}
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
                {heroContent.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
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
