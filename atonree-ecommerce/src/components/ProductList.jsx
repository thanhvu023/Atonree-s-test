import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onDetail }) => {
  if (!products.length) return <div>Không có sản phẩm nào.</div>;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onDetail={onDetail} />
      ))}
    </div>
  );
};
export default ProductList; 