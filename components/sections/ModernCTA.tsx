import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";

export const ModernCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-orange-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      {/* Decorative Car Image */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none hidden lg:block">
        <img
          src="https://c.animaapp.com/mh5qprntqjweLB/assets/bannerbgsmall.png"
          alt="Car"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Get Cash for Your Car?
        </h2>
        <p className="text-xl sm:text-2xl mb-10 text-white/90">
          Call now or get an instant quote online. We&apos;re ready to buy your vehicle today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href="tel:0420587575"
            variant="secondary"
            size="xl"
            className="bg-white text-primary hover:bg-gray-100 group"
          >
            <Phone className="mr-2 w-6 h-6" />
            <span className="text-xl">Call: 0420 587 575</span>
          </Button>
          <Button
            href="#quote"
            variant="outline"
            size="xl"
            className="border-white text-white hover:bg-white hover:text-primary group"
          >
            Get Online Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/30">
          <p className="text-lg text-white/80">
            <strong className="text-white">Open 365 Days:</strong> 8am - 8pm (AEST/AEDT)
          </p>
        </div>
      </div>
    </section>
  );
};
