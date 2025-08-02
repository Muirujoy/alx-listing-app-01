import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Misty Mansion",
    address: { state: "Central", city: "Murang'a", country: "Kenya" },
    rating: 4.5,
    category: ["Mansion", "Luxury"],
    price: 230,
    offers: { bed: "4 Beds", shower: "2 Showers", occupants: "8 Guests" },
    image: "/images/mansion.jpg",
    discount: "15% off"
  },
  {
    name: "Cozy Cottage",
    address: { state: "Coast", city: "Diani", country: "Kenya" },
    rating: 4.2,
    category: ["Beachfront", "Relaxing"],
    price: 180,
    offers: { bed: "2 Beds", shower: "1 Shower", occupants: "4 Guests" },
    image: "/images/cottage.jpg",
    discount: "10% off"
  },
  // Add more listings as needed
];
