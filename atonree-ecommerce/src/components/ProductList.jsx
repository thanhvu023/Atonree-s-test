import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ products, onDetail }) => {
  if (!products.length) {
    return <div className="product-list-empty">Không có sản phẩm nào.</div>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onDetail={onDetail}
        />
      ))}
    </div>
  );
};

export default ProductList; 