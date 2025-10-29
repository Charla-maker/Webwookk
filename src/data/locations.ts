export type LocationData = {
  id: string;
  name: string;
  region: string;
  suburbs: string[];
  landmarks: string[];
  description: string;
  mapUrl: string;
  coordinates: { lat: number; lng: number };
  image: string;
};

export const locationsData: LocationData[] = [
  {
    id: "sydney-cbd",
    name: "Sydney CBD",
    region: "Central Sydney",
    suburbs: [
      "Circular Quay",
      "The Rocks",
      "Darling Harbour",
      "Barangaroo",
      "Haymarket",
      "Ultimo",
      "Pyrmont",
      "Chippendale",
      "Surry Hills",
      "Darlinghurst",
      "Potts Point",
      "Kings Cross",
    ],
    landmarks: [
      "Sydney Opera House",
      "Sydney Harbour Bridge",
      "Town Hall",
      "Central Station",
      "Queen Victoria Building",
      "Darling Harbour",
      "Barangaroo Reserve",
      "Hyde Park",
    ],
    description:
      "SellMyCars provides premium cash for cars services in Sydney CBD and surrounding inner-city suburbs. Whether you're near the iconic Sydney Opera House, working in the business district, or living in the vibrant neighborhoods of Surry Hills or Darlinghurst, we offer convenient vehicle removal with top cash payments.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106104.07736264807!2d151.1093!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632bfc0!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1234567890",
    coordinates: { lat: -33.8688, lng: 151.2093 },
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
  },
  {
    id: "western-sydney",
    name: "Western Sydney",
    region: "Greater Western Sydney",
    suburbs: [
      "Parramatta",
      "Blacktown",
      "Liverpool",
      "Penrith",
      "Campbelltown",
      "Auburn",
      "Merrylands",
      "Fairfield",
      "Bankstown",
      "Cabramatta",
      "Mount Druitt",
      "St Marys",
    ],
    landmarks: [
      "Westfield Parramatta",
      "Penrith Stadium",
      "Liverpool Hospital",
      "Blacktown Showground",
      "Parramatta Park",
      "Western Sydney Stadium",
      "Raging Waters",
      "Featherdale Wildlife Park",
    ],
    description:
      "Western Sydney is one of our busiest service areas. From Parramatta's bustling CBD to the growing communities of Penrith and Campbelltown, we buy all types of vehicles. Our Western Sydney team understands the diverse needs of this region and provides fast, reliable service to all suburbs.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212207.8!2d150.8!3d-33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sParramatta%20NSW!5e0!3m2!1sen!2sau!4v1234567890",
    coordinates: { lat: -33.8, lng: 150.8 },
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
  {
    id: "northern-suburbs",
    name: "Northern Suburbs",
    region: "North Sydney",
    suburbs: [
      "Chatswood",
      "Hornsby",
      "North Sydney",
      "Ryde",
      "Macquarie Park",
      "St Leonards",
      "Willoughby",
      "Lane Cove",
      "Turramurra",
      "Pymble",
      "Gordon",
      "Lindfield",
    ],
    landmarks: [
      "Chatswood Chase",
      "Macquarie Centre",
      "Lane Cove National Park",
      "North Sydney Oval",
      "Hornsby Westfield",
      "Macquarie University",
      "Royal North Shore Hospital",
      "Luna Park",
    ],
    description:
      "The Northern Suburbs of Sydney are home to thriving communities and excellent transport links. Whether you're in the shopping hub of Chatswood, the business district of North Sydney, or the leafy streets of Turramurra, SellMyCars offers premium cash for cars services with free towing throughout the North Shore.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106104.07736264807!2d151.1!3d-33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a97d0b9b5c5f%3A0x5017d681632bfc0!2sChatswood%20NSW!5e0!3m2!1sen!2sau!4v1234567890",
    coordinates: { lat: -33.7, lng: 151.1 },
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    id: "eastern-suburbs",
    name: "Eastern Suburbs",
    region: "Eastern Sydney",
    suburbs: [
      "Bondi",
      "Randwick",
      "Maroubra",
      "Double Bay",
      "Paddington",
      "Coogee",
      "Bronte",
      "Clovelly",
      "Waverley",
      "Woollahra",
      "Rose Bay",
      "Vaucluse",
    ],
    landmarks: [
      "Bondi Beach",
      "Centennial Park",
      "Royal Randwick Racecourse",
      "Coogee Beach",
      "Bronte Beach",
      "Bondi Junction Westfield",
      "Prince of Wales Hospital",
      "University of NSW",
    ],
    description:
      "Sydney's Eastern Suburbs are known for beautiful beaches and vibrant communities. From the world-famous Bondi Beach to the elegant streets of Double Bay, we provide top-tier cash for cars services. Our team knows the Eastern Suburbs well and offers convenient pickup from any beachside or inland location.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106104.07736264807!2d151.25!3d-33.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1f0b9b5c5f%3A0x5017d681632bfc0!2sBondi%20NSW!5e0!3m2!1sen!2sau!4v1234567890",
    coordinates: { lat: -33.89, lng: 151.25 },
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "southern-sydney",
    name: "Southern Sydney",
    region: "South Sydney",
    suburbs: [
      "Sutherland",
      "Cronulla",
      "Hurstville",
      "Kogarah",
      "Miranda",
      "Caringbah",
      "Engadine",
      "Menai",
      "Rockdale",
      "Brighton-Le-Sands",
      "Sans Souci",
      "Gymea",
    ],
    landmarks: [
      "Cronulla Beach",
      "Royal National Park",
      "Westfield Miranda",
      "Sutherland Hospital",
      "Sharks Stadium",
      "Kurnell Peninsula",
      "Brighton Beach",
      "Dolls Point Reserve",
    ],
    description:
      "Southern Sydney stretches from the beaches of Cronulla to the shopping centers of Miranda and Hurstville. SellMyCars has been serving the Sutherland Shire and St George area for years, providing reliable cash for cars services with same-day pickup and top dollar for all vehicle types.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106104.07736264807!2d151.1!3d-34.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b7f0b9b5c5f%3A0x5017d681632bfc0!2sCronulla%20NSW!5e0!3m2!1sen!2sau!4v1234567890",
    coordinates: { lat: -34.05, lng: 151.15 },
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
  {
    id: "inner-west",
    name: "Inner West",
    region: "Inner Western Sydney",
    suburbs: [
      "Newtown",
      "Marrickville",
      "Leichhardt",
      "Ashfield",
      "Strathfield",
      "Burwood",
      "Dulwich Hill",
      "Petersham",
      "Stanmore",
      "Enmore",
      "Balmain",
      "Rozelle",
    ],
    landmarks: [
      "King Street Newtown",
      "Sydney Park",
      "Norton Street Leichhardt",
      "Burwood Westfield",
      "Ashfield Mall",
      "Callan Park",
      "Iron Cove Bridge",
      "Marrickville Metro",
    ],
    description:
      "The Inner West is one of Sydney's most diverse and culturally rich areas. From the bohemian streets of Newtown to the Italian quarter of Leichhardt, we provide fast and friendly cash for cars services. Our Inner West team understands the unique character of each suburb and offers personalized service.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106104.07736264807!2d151.15!3d-33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b2f0b9b5c5f%3A0x5017d681632bfc0!2sNewtown%20NSW!5e0!3m2!1sen!2sau!4v1234567890",
    coordinates: { lat: -33.9, lng: 151.18 },
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
];
