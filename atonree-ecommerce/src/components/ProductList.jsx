import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products.length) return <div>Không có sản phẩm nào.</div>;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList; 