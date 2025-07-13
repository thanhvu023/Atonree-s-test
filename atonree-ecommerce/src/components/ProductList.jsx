import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ products, onDetail, onFavorite, favorites }) => {
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
          onFavorite={onFavorite}
          isFavorite={favorites.includes(product.id)}
        />
      ))}
    </div>
  );
};
export default ProductList; 