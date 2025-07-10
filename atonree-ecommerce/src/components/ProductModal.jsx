import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <img
            src={product.image || 'https://via.placeholder.com/320'}
            alt={product.name}
            className="modal-img"
          />
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-price">{product.price.toLocaleString()} đ</p>
            <p className="modal-rating">Đánh giá: {product.rating} ⭐</p>
            <p className="modal-desc">{product.longDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal; 