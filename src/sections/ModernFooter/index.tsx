import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export const ModernFooter = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img
              src="https://c.animaapp.com/mh5qprntqjweLB/assets/Red-Silver-Simple-Elegant-Car-Dealer-Logo.png"
              alt="SellMyCars"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Sydney's most trusted car buying service. Fast, fair, and hassle-free. 
              We buy any vehicle in any condition.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Sydneycarsforcash"
                className="bg-white/10 hover:bg-primary p-3 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#locations" className="text-gray-400 hover:text-primary transition-colors">
                  Service Locations
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:0420587575" className="text-gray-400 hover:text-primary transition-colors">
                    0420 587 575
                  </a>
                  <div className="text-sm text-gray-500">8am - 8pm Daily</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:info@sellmycars.com.au" className="text-gray-400 hover:text-primary transition-colors">
                  info@sellmycars.com.au
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Greater Sydney, NSW
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 SellMyCars.com.au. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Design & Developed by{" "}
              <a href="http://evalise.com.au/" className="text-primary hover:text-accent transition-colors">
                Evalise
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
