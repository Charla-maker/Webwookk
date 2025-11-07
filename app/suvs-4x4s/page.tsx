import type { Metadata } from 'next'
import { ModernNavbar } from '@/components/sections/ModernNavbar'
import { ModernFooter } from '@/components/sections/ModernFooter'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Phone, ArrowRight, DollarSign, Shield, Clock } from 'lucide-react'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Sell SUVs & 4x4s for Cash in Sydney | Best Offers - SellMyCars',
  description: 'Get top cash offers for your SUV, 4x4, or large vehicle in Sydney. Fast pickup and fair prices. We buy all makes and models. Free towing.',
  keywords: 'sell suv, cash for 4x4 sydney, suv removal, large vehicle buyer, 4wd cash offer',
  openGraph: {
    title: 'Sell SUVs & 4x4s for Cash in Sydney | Best Offers',
    description: 'Get top cash offers for your SUV or 4x4 in Sydney. Fast pickup and fair prices.',
    type: 'website',
    images: ['https://c.animaapp.com/mh5qprntqjweLB/img/suv-and-van.jpeg'],
  },
}

export default function SuvsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <main>
        {/* Hero Section for SUVs & 4x4s */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-green-900 to-secondary text-white min-h-screen flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRsLTQgMS43OS00IDQgMS43OS00IDQgNCA0LTEuNzktNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Z2E=')]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="bg-accent text-secondary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Best Offers for Large Vehicles
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Sell Your SUV or 4x4
                  <span className="block text-primary">Top Cash Paid</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Premium prices for SUVs, 4WDs, and large vehicles.
                  <strong className="text-white"> Fast pickup and instant payment.</strong>
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">High demand = Higher offers for 4x4s</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">We handle all paperwork</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-200">Free towing, no matter the size</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button href="#suv-quote" size="xl" className="group">
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
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/30 to-accent/30 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10 hover:scale-105 transition-transform duration-500">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="https://c.animaapp.com/mh5qprntqjweLB/img/suv-and-van.jpeg"
                      alt="SUV and 4x4"
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sell SUV to Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Our Advantage
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-secondary">
                Why Sell Your SUV or 4x4 to Us?
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Specialized service for large vehicles and off-road capable cars
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Premium Offers</h3>
                <p className="text-gray-700">
                  SUVs and 4x4s are in high demand. We pay top dollar for all makes and models.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Professional Service</h3>
                <p className="text-gray-700">
                  Expert evaluations and safe, secure transactions. Your satisfaction is guaranteed.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Quick Process</h3>
                <p className="text-gray-700">
                  From quote to cash in hand within 24 hours. We make selling your SUV easy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="suv-quote" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">
                Get Your SUV or 4x4 Cash Offer
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below for a free, no-obligation cash offer on your large vehicle.
              </p>
            </div>
            <ContactForm locationPage="suvs-4x4s" />
          </div>
        </section>
      </main>
      <ModernFooter />
    </div>
  )
}
