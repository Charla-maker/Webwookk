import type { Metadata } from 'next'
import { ModernNavbar } from '@/components/sections/ModernNavbar'
import { ModernFooter } from '@/components/sections/ModernFooter'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Phone, ArrowRight, DollarSign, Shield, Clock } from 'lucide-react'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Sell Luxury Cars for Cash in Sydney | Top Offers - SellMyCars',
  description: 'Get top cash offers for your luxury vehicle in Sydney. Fast, secure, and hassle-free process for high-end cars, sports cars, and premium sedans. Free towing.',
  keywords: 'sell luxury car, cash for luxury cars sydney, premium car removal, high-end car buyer, sports car cash offer',
  openGraph: {
    title: 'Sell Luxury Cars for Cash in Sydney | Top Offers',
    description: 'Get top cash offers for your luxury vehicle in Sydney. Fast, secure, and hassle-free process.',
    type: 'website',
    images: ['https://c.animaapp.com/mh5qprntqjweLB/img/luxury-car.jpg'],
  },
}

export default function LuxuryVehiclesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <main>
        {/* Hero Section for Luxury Vehicles */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-secondary text-white min-h-screen flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRsLTQgMS43OS00IDQgMS43OS00IDQgNCA0LTEuNzktNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Z2E=')]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="bg-accent text-secondary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Premium Vehicle Offers
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Sell Your Luxury Car
                  <span className="block text-primary">Get Top Cash Today</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Specialized service for high-end, sports, and premium vehicles. 
                  <strong className="text-white"> Discreet, professional, and best market value.</strong>
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">Exclusive offers for luxury brands</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">Hassle-free, confidential process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">Free, insured towing anywhere in Sydney</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button href="#luxury-quote" size="xl" className="group">
                    Get Your Cash Offer
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button href="tel:0420587575" variant="outline" size="xl" className="group border-white text-white hover:bg-white hover:text-secondary">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 0420 587 575
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10 hover:scale-105 transition-transform duration-500">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://c.animaapp.com/mh5qprntqjweLB/img/luxury-car.jpg"
                      alt="Luxury Car"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sell Luxury Car to Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Our Advantage
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-secondary">
                Why Choose Us for Your Luxury Vehicle?
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Experience a premium selling process tailored for high-value cars
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Unmatched Offers</h3>
                <p className="text-gray-700">
                  We leverage our network to provide the highest possible cash offers for luxury and performance vehicles.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Discreet & Secure</h3>
                <p className="text-gray-700">
                  Your privacy and security are paramount. We ensure a confidential and safe transaction from start to finish.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Effortless Process</h3>
                <p className="text-gray-700">
                  Save time and avoid dealership hassles. Our streamlined process gets you paid quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="luxury-quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">
                Get Your Exclusive Luxury Car Offer
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below for a personalized, no-obligation cash offer on your premium vehicle.
              </p>
            </div>
            <ContactForm locationPage="luxury-vehicles" />
          </div>
        </section>
      </main>
      <ModernFooter />
    </div>
  )
}
