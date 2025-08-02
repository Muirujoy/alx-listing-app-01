// components/property/PropertyDetail.tsx
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Use your tab component or replace

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>·</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {/* More images can be added here */}
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        {/* Left section */}
        <div className="flex-1">
          {/* Tabs for description */}
          <Tabs defaultValue="offer">
            <TabsList className="mb-4">
              <TabsTrigger value="offer">What we offer</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="host">About host</TabsTrigger>
            </TabsList>
            <TabsContent value="offer">
              <p>{property.description}</p>
            </TabsContent>
            <TabsContent value="reviews">
              <ReviewSection reviews={property.reviews || []} />
            </TabsContent>
            <TabsContent value="host">
              <p>{property.host?.bio || "Host info coming soon."}</p>
            </TabsContent>
          </Tabs>

          {/* Amenities */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">
              What this place offers
            </h2>
            <ul className="flex flex-wrap gap-2">
              {property.category.map((amenity, index) => (
                <li
                  key={index}
                  className="bg-gray-100 border px-3 py-2 rounded"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Booking Section */}
        <div className="w-full lg:w-[30%]">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
