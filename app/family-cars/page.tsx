import type { Metadata } from 'next'
import { ModernNavbar } from '@/components/sections/ModernNavbar'
import { ModernFooter } from '@/components/sections/ModernFooter'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Phone, ArrowRight, DollarSign, Shield, Clock } from 'lucide-react'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Sell Family Cars for Cash in Sydney | Fair Prices - SellMyCars',
  description: 'Get fair cash offers for your family sedan or hatchback in Sydney. Fast, easy, and hassle-free process. We buy all makes and models. Free towing.',
  keywords: 'sell family car, cash for sedans sydney, hatchback removal, car buyer sydney, sedan cash offer',
  openGraph: {
    title: 'Sell Family Cars for Cash in Sydney | Fair Prices',
    description: 'Get fair cash offers for your family car in Sydney. Fast, easy, and hassle-free process.',
    type: 'website',
    images: ['https://c.animaapp.com/mh5qprntqjweLB/img/family-car.jpeg'],
  },
}

export default function FamilyCarsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <main>
        {/* Hero Section for Family Cars */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-900 to-secondary text-white min-h-screen flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRsLTQgMS43OS00IDQgMS43OS00IDQgNCA0LTEuNzktNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Z2E=')]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="bg-accent text-secondary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Reliable & Fair Offers
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Sell Your Family Car
                  <span className="block text-primary">Get Cash Fast</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Fair prices for sedans, hatchbacks, and wagons.
                  <strong className="text-white"> Quick, honest, and hassle-free.</strong>
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">Fair market value for all makes and models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">Same-day pickup available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">Free towing across Sydney</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button href="#family-quote" size="xl" className="group">
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
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 to-accent/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10 hover:scale-105 transition-transform duration-500">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="https://c.animaapp.com/mh5qprntqjweLB/img/family-car.jpeg"
                      alt="Family Car"
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

        {/* Why Sell Family Car to Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Our Promise
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-secondary">
                Why Choose Us for Your Family Car?
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Honest, transparent, and convenient car buying service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Fair Pricing</h3>
                <p className="text-gray-700">
                  We offer competitive market rates for all family vehicles, regardless of age or condition.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Trusted Service</h3>
                <p className="text-gray-700">
                  Transparent process with no hidden fees. What we quote is what you get.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Fast Payment</h3>
                <p className="text-gray-700">
                  Get paid on the spot. No waiting, no hassle. Cash in hand the same day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="family-quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">
                Get Your Family Car Cash Offer
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below for a free, no-obligation cash offer on your family vehicle.
              </p>
            </div>
            <ContactForm locationPage="family-cars" />
          </div>
        </section>
      </main>
      <ModernFooter />
    </div>
  )
}
