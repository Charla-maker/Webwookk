export type ContactSubmission = {
  id?: string
  created_at?: string
  name: string
  phone: string
  email: string
  make: string
  model: string
  year: string
  condition: string
  message?: string
  location_page?: string
  ip_address?: string
  user_agent?: string
  status?: 'new' | 'contacted' | 'quoted' | 'completed' | 'cancelled'
}

export type LocationData = {
  id: string
  name: string
  region: string
  suburbs: string[]
  landmarks: string[]
  description: string
  mapUrl: string
  coordinates: { lat: number; lng: number }
  image: string
}
