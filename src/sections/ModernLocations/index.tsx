import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { locationsData } from "@/data/locations";

type ModernLocationsProps = {
  onLocationClick: (locationId: string) => void;
};

export const ModernLocations = ({ onLocationClick }: ModernLocationsProps) => {
  const extendedAreas = [
    {
      region: "Central Coast",
      areas: ["Gosford", "Wyong", "Terrigal", "The Entrance", "Woy Woy"],
    },
    {
      region: "Blue Mountains",
      areas: ["Katoomba", "Leura", "Springwood", "Penrith", "Richmond"],
    },
    {
      region: "Wollongong",
      areas: ["Wollongong CBD", "Shellharbour", "Kiama", "Port Kembla", "Dapto"],
    },
    {
      region: "ACT Region",
      areas: ["Canberra", "Queanbeyan", "Gungahlin", "Belconnen", "Tuggeranong"],
    },
  ];

  const allSuburbs = [
    "Bankstown", "Burwood", "Canterbury", "Fairfield", "Auburn", "Merrylands",
    "Cabramatta", "Revesby", "Punchbowl", "Lakemba", "Wiley Park", "Yagoona",
    "Mosman", "Manly", "Dee Why", "Brookvale", "Frenchs Forest", "Mona Vale",
    "Narrabeen", "Collaroy", "Avalon", "Palm Beach", "Pymble", "Turramurra",
    "Wahroonga", "Lindfield", "Roseville", "St Ives", "Gordon", "Killara",
    "Eastwood", "Epping", "Carlingford", "Dundas", "Ermington", "Meadowbank",
    "Rhodes", "Concord", "Drummoyne", "Five Dock", "Haberfield", "Summer Hill",
    "Dulwich Hill", "Petersham", "Stanmore", "Enmore", "Camperdown", "Glebe",
    "Annandale", "Rozelle", "Balmain", "Birchgrove", "Lilyfield", "Leichhardt",
    "Mascot", "Alexandria", "Waterloo", "Redfern", "Surry Hills", "Darlinghurst",
    "Potts Point", "Kings Cross", "Woolloomooloo", "Pyrmont", "Ultimo", "Chippendale",
    "Zetland", "Rosebery", "Beaconsfield", "Kensington", "Kingsford", "Matraville",
    "Malabar", "Little Bay", "La Perouse", "Botany", "Pagewood", "Eastlakes",
    "Rockdale", "Brighton-Le-Sands", "Ramsgate", "Sans Souci", "Dolls Point", "Sandringham",
    "Caringbah", "Gymea", "Miranda", "Kirrawee", "Jannali", "Como", "Oyster Bay",
    "Sylvania", "Taren Point", "Woolooware", "Burraneer", "Cronulla", "Bundeena",
    "Engadine", "Heathcote", "Waterfall", "Helensburgh", "Stanwell Park", "Thirroul",
  ];

  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Service Areas
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary">
            Cash For Cars Across
            <span className="block text-primary">Greater Sydney & NSW</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We buy cars, trucks, utes, and 4x4s in all Sydney suburbs and surrounding regions. 
            Free towing and same-day service available across 700+ locations.
          </p>
        </div>

        {/* Quick Contact Banner */}
        <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 mb-16 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-4 rounded-xl">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Servicing Your Area</h3>
                <p className="text-white/90">Free pickup within 2 hours across Greater Sydney</p>
              </div>
            </div>
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

        {/* Main Service Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Major Service Regions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData.map((area) => (
              <button
                key={area.id}
                onClick={() => onLocationClick(area.id)}
                className="text-left bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {area.name}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Key Suburbs ({area.suburbs.length})
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {area.suburbs.slice(0, 5).map((suburb, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {suburb}
                        </span>
                      ))}
                      {area.suburbs.length > 5 && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          +{area.suburbs.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Near Landmarks
                    </h4>
                    <ul className="space-y-1">
                      {area.landmarks.slice(0, 3).map((landmark, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-primary font-semibold text-sm flex items-center">
                      View Full Details & Map
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Extended Service Areas */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Extended Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extendedAreas.map((region, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-bold text-secondary">{region.region}</h3>
                </div>
                <ul className="space-y-2">
                  {region.areas.map((area, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* All Suburbs List */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-secondary mb-4 text-center">
            Complete Suburb Coverage
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We service over 700 suburbs across Greater Sydney, Central Coast, Blue Mountains, 
            Wollongong, and ACT. Here's a selection of areas we cover:
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {allSuburbs.map((suburb, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{suburb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-white mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our Service Across Sydney?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-300">
                Average pickup time of 2 hours across all Sydney suburbs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Towing</h3>
              <p className="text-gray-300">
                Complimentary vehicle removal from any location in our service area
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Experts</h3>
              <p className="text-gray-300">
                Sydney-based team with extensive knowledge of all areas
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your Car?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            No matter where you are in Greater Sydney or NSW, we'll come to you with cash in hand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="tel:0420587575"
              variant="secondary"
              size="xl"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="mr-2 w-6 h-6" />
              Call: 0420 587 575
            </Button>
            <Button
              href="#quote"
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get Online Quote
            </Button>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-20 prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Cash For Cars Service Across All Sydney Regions
            </h2>
            <p className="text-gray-700 mb-4">
              SellMyCars.com.au is Sydney's most trusted cash for cars service, operating across 
              all major regions including Sydney CBD, Western Sydney, Northern Suburbs, Eastern 
              Suburbs, Southern Sydney, and the Inner West. We also extend our services to the 
              Central Coast, Blue Mountains, Wollongong, and ACT regions.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're near iconic landmarks like the Sydney Opera House, Harbour Bridge, 
              Bondi Beach, or Parramatta's Westfield, our team can reach you within hours. We 
              buy all types of vehicles including cars, trucks, utes, vans, and 4x4s in any 
              condition - running or not, registered or unregistered.
            </p>
            <p className="text-gray-700">
              Our service covers over 700 suburbs with free towing and same-day cash payment. 
              From Penrith to Cronulla, Hornsby to Campbelltown, and everywhere in between, 
              we're your local cash for cars experts ready to provide top dollar for your vehicle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
