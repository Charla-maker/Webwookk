'use client'

import { Button } from "@/components/ui/Button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image
                src="https://c.animaapp.com/mh5qprntqjweLB/assets/Red-Silver-Simple-Elegant-Car-Dealer-Logo-1.png"
                alt="SellMyCars"
                width={120}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why-us"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Why Us
            </a>
            <Link
              href="/locations"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Locations
            </Link>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Reviews
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0420587575"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>0420 587 575</span>
            </a>
            <Button href="#quote" size="md">
              Get Cash Offer
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-us"
              className="block text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <Link
              href="/locations"
              className="block text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <a
              href="#testimonials"
              className="block text-gray-700 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="tel:0420587575"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>0420 587 575</span>
            </a>
            <Button href="#quote" size="md" fullWidth>
              Get Cash Offer
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
