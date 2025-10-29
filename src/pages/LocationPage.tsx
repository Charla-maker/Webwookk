import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, DollarSign, Truck, Star, ArrowLeft, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";

type LocationPageProps = {
  locationName: string;
  region: string;
  suburbs: string[];
  landmarks: string[];
  description: string;
  mapUrl: string;
  coordinates: { lat: number; lng: number };
  onBack: () => void;
};

export const LocationPage = ({
  locationName,
  region,
  suburbs,
  landmarks,
  description,
  mapUrl,
  coordinates,
  onBack,
}: LocationPageProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "suburbs" | "contact">("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    "Cash for Cars",
    "Cash for Trucks",
    "Cash for Utes",
    "Cash for 4x4s",
    "Cash for Vans",
    "Scrap Car Removal",
    "Unwanted Car Removal",
    "Old Car Removal",
    "Damaged Car Removal",
    "Accident Car Removal",
  ];

  const benefits = [
    { icon: DollarSign, title: "Top Cash Offers", desc: "Up to $30,000 paid instantly" },
    { icon: Truck, title: "Free Towing", desc: "Complimentary pickup service" },
    { icon: Clock, title: "Same Day Service", desc: "Quick 2-hour response time" },
    { icon: Star, title: "5-Star Rated", desc: "Trusted by 5000+ customers" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-orange-600 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Locations</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cash For Cars in {locationName}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Sydney's #1 car buying service in {locationName}. Fast, fair, and hassle-free. 
            Get cash for your vehicle today!
          </p>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-secondary text-white py-4 px-4 sticky top-20 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-semibold">Servicing {locationName} & Surrounding Areas</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:0420587575"
              className="flex items-center space-x-2 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">0420 587 575</span>
            </a>
            <Button href="#contact-form" size="sm" className="bg-primary hover:bg-primary/90">
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === "overview"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("suburbs")}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === "suburbs"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Suburbs We Cover
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`pb-4 px-4 font-semibold transition-colors ${
              activeTab === "contact"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Get Quote
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gray-100 p-4 flex items-center justify-between">
                  <h3 className="font-bold text-lg text-secondary">Service Area Map</h3>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span className="text-sm font-semibold">Open in Google Maps</span>
                  </a>
                </div>
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  About Our {locationName} Service
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">{description}</p>
                  <p className="mb-4">
                    Our {locationName} team specializes in buying all types of vehicles including 
                    cars, trucks, utes, vans, and 4x4s. Whether your vehicle is in excellent 
                    condition or not running at all, we'll make you a fair cash offer and arrange 
                    free towing at your convenience.
                  </p>
                  <p>
                    We understand the local {locationName} market and provide competitive prices 
                    that reflect the true value of your vehicle. Our process is simple: call us 
                    for a quote, accept our offer, and we'll come to you with cash in hand.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Services in {locationName}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmarks */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Near Popular {locationName} Landmarks
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {landmarks.map((landmark, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Content */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  Why Choose SellMyCars in {locationName}?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Local Expertise:</strong> Our team has extensive knowledge of the 
                    {locationName} area and understands the local vehicle market. We've been 
                    serving {locationName} residents for years, building a reputation for 
                    honesty, reliability, and fair pricing.
                  </p>
                  <p>
                    <strong>Fast Service:</strong> We know your time is valuable. That's why we 
                    offer same-day service throughout {locationName}. From your initial call to 
                    cash in hand, the entire process typically takes just 2 hours.
                  </p>
                  <p>
                    <strong>Top Dollar Paid:</strong> We pay competitive prices for all vehicles 
                    in {locationName}. Our quotes are based on current market values, and we 
                    never lowball our customers. Get up to $30,000 for your vehicle.
                  </p>
                  <p>
                    <strong>Free Towing:</strong> No matter where you are in {locationName} or 
                    surrounding suburbs, we provide complimentary towing services. Our tow trucks 
                    are equipped to handle any vehicle type.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Benefits */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-36">
                <h3 className="text-xl font-bold text-secondary mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button href="tel:0420587575" size="lg" fullWidth>
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now: 0420 587 575
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Suburbs Tab */}
        {activeTab === "suburbs" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Suburbs We Service in {locationName}
              </h2>
              <p className="text-gray-600 mb-6">
                We provide cash for cars services throughout {locationName} and all surrounding 
                suburbs. Click on any suburb below to learn more about our services in that area.
              </p>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {suburbs.map((suburb, index) => (
                  <button
                    key={index}
                    className="text-left p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{suburb}</span>
                      <MapPin className="w-4 h-4 text-primary group-hover:text-white" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Suburb?</h3>
              <p className="text-white/90 mb-6">
                We service over 700 locations across Greater Sydney. Even if your suburb isn't 
                listed, we likely cover your area. Give us a call to confirm!
              </p>
              <Button
                href="tel:0420587575"
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call: 0420 587 575
              </Button>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <div className="max-w-4xl mx-auto" id="contact-form">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Get Your Cash Offer for {locationName}
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you within 2 hours with a cash offer
              </p>
            </div>
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};
