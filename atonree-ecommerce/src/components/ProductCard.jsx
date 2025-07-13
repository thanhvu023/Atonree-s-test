import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onDetail, onFavorite, isFavorite }) => {
  return (
    <div className="product-card">
      <button
        onClick={() => onFavorite(product.id)}
        className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <img 
        src={product.image || 'https://via.placeholder.com/200'} 
        alt={product.name} 
        className="product-card-image"
      />
      <h3 className="product-card-title">{product.name}</h3>
      <p className="product-card-price">{product.price.toLocaleString()} đ</p>
      <p className="product-card-desc">{product.shortDesc}</p>
      <button
        className="product-card-button"
        onClick={() => onDetail(product)}
      >
        Xem chi tiết
      </button>
    </div>
  );
};
export default ProductCard; 