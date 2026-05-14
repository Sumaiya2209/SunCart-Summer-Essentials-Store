import React from 'react';
import ProductDetails from '@/components/products/ProductDetails';

const ProductDetailsPage = ({ params}) => {
  return (
    <div>
      <ProductDetails product={params.id} />
    </div>
  );
};

export default ProductDetailsPage;