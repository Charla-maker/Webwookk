import { ModernNavbar } from '@/components/sections/ModernNavbar'
import { ModernHero } from '@/components/sections/ModernHero'
import { BrandLogos } from '@/components/sections/BrandLogos'
import { ModernHowItWorks } from '@/components/sections/ModernHowItWorks'
import { CarShowcase } from '@/components/sections/CarShowcase'
import { ModernWhyUs } from '@/components/sections/ModernWhyUs'
import { ModernLocations } from '@/components/sections/ModernLocations'
import { ModernCTA } from '@/components/sections/ModernCTA'
import { ModernTestimonials } from '@/components/sections/ModernTestimonials'
import { ModernFooter } from '@/components/sections/ModernFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <main>
        <ModernHero />
        <BrandLogos />
        <ModernHowItWorks />
        <CarShowcase />
        <ModernWhyUs />
        <ModernLocations />
        <ModernCTA />
        <ModernTestimonials />
      </main>
      <ModernFooter />
    </div>
  )
}
