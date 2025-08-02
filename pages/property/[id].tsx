// pages/property/[id].tsx
import { GetServerSideProps } from "next";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";

interface PropertyPageProps {
  property: PropertyProps;
}

const PropertyPage: React.FC<PropertyPageProps> = ({ property }) => {
  return <PropertyDetail property={property} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  // Replace this with actual fetch logic from your backend or DB
  const res = await fetch(`http://localhost:3000/api/properties/${id}`);
  const property = await res.json();

  return {
    props: {
      property,
    },
  };
};

export default PropertyPage;
