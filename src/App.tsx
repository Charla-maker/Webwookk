import { useState } from "react";
import { ModernNavbar } from "@/sections/ModernNavbar";
import { ModernHero } from "@/sections/ModernHero";
import { BrandLogos } from "@/sections/BrandLogos";
import { ModernHowItWorks } from "@/sections/ModernHowItWorks";
import { CarShowcase } from "@/sections/CarShowcase";
import { ModernWhyUs } from "@/sections/ModernWhyUs";
import { ModernLocations } from "@/sections/ModernLocations";
import { ModernCTA } from "@/sections/ModernCTA";
import { ModernTestimonials } from "@/sections/ModernTestimonials";
import { ModernFooter } from "@/sections/ModernFooter";
import { LocationPage } from "@/pages/LocationPage";
import { locationsData } from "@/data/locations";

export const App = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleLocationClick = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const handleBackToLocations = () => {
    setSelectedLocation(null);
  };

  const currentLocation = locationsData.find((loc) => loc.id === selectedLocation);

  if (selectedLocation && currentLocation) {
    return (
      <div className="min-h-screen bg-white">
        <ModernNavbar />
        <LocationPage
          locationName={currentLocation.name}
          region={currentLocation.region}
          suburbs={currentLocation.suburbs}
          landmarks={currentLocation.landmarks}
          description={currentLocation.description}
          mapUrl={currentLocation.mapUrl}
          coordinates={currentLocation.coordinates}
          onBack={handleBackToLocations}
        />
        <ModernFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <main>
        <ModernHero />
        <BrandLogos />
        <ModernHowItWorks />
        <CarShowcase />
        <ModernWhyUs />
        <ModernLocations onLocationClick={handleLocationClick} />
        <ModernCTA />
        <ModernTestimonials />
      </main>
      <ModernFooter />
    </div>
  );
};
