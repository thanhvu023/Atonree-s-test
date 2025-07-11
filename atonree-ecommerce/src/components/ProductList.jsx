import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onDetail, onFavorite, favorites }) => {
  if (!products.length) return <div>Không có sản phẩm nào.</div>;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
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