import ProductDetails from "@/components/products/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;


  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductDetailsPage;