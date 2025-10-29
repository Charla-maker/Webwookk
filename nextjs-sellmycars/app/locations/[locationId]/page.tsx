import { locationsData } from '@/lib/data/locations'
import { LocationDetailPage } from '@/components/location/LocationDetailPage'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ locationId: string }>
}

export async function generateStaticParams() {
  return locationsData.map((location) => ({
    locationId: location.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locationId } = await params
  const location = locationsData.find((l) => l.id === locationId)

  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: `Cash For Cars in ${location.name} | SellMyCars Sydney`,
    description: location.description,
    keywords: `cash for cars ${location.name}, sell my car ${location.name}, car removal ${location.name}, ${location.suburbs.join(', ')}`,
    openGraph: {
      title: `Cash For Cars in ${location.name}`,
      description: location.description,
      type: 'website',
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { locationId } = await params
  const location = locationsData.find((l) => l.id === locationId)

  if (!location) {
    notFound()
  }

  return <LocationDetailPage location={location} />
}
