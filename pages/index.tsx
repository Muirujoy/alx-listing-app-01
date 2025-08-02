import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Pet Friendly",
    "Private Pool"
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="text-center bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg mt-2">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="my-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm hover:bg-blue-200"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Listing Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <Image
  src="/images/mansion.jpg"
  alt="Beautiful Mansion"
  width={400}      // required
  height={200}     // required
  className="w-full object-cover rounded"
/>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-sm text-gray-600">{property.address.city}, {property.address.country}</p>
              <p className="text-gray-800 font-bold mt-2">${property.price}/night</p>
              <p className="text-sm text-green-600">{property.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
