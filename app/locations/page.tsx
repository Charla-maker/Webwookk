import { ModernNavbar } from '@/components/sections/ModernNavbar'
import { ModernLocations } from '@/components/sections/ModernLocations'
import { ModernFooter } from '@/components/sections/ModernFooter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Locations - Cash For Cars Across Sydney | SellMyCars',
  description: 'We service over 700 suburbs across Greater Sydney, Central Coast, Blue Mountains, Wollongong, and ACT. Find your location and get a cash offer today.',
  keywords: 'cash for cars sydney locations, car removal sydney suburbs, sell car parramatta, cash for cars bondi',
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <main className="pt-20">
        <ModernLocations />
      </main>
      <ModernFooter />
    </div>
  )
}
