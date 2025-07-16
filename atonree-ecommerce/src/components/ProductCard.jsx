import React from 'react';
import '../styles/ProductCard.css';
import { useFavorites } from '../hooks/useFavorites';

const ProductCard = ({ product, onDetail }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="product-card">
      <button
        onClick={handleToggleFavorite}
        className={`favorite-button ${isFavorite(product.id) ? 'favorited' : ''}`}
      >
        {isFavorite(product.id) ? '❤️' : '🤍'}
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