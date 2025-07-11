import React from 'react';

const ProductCard = ({ product, onDetail, onFavorite, isFavorite }) => {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, width: 240, position: 'relative' }}>
      <button
        onClick={() => onFavorite(product.id)}
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          background: 'none',
          border: 'none',
          fontSize: 20,
          cursor: 'pointer',
          color: isFavorite ? '#e74c3c' : '#ccc',
          transition: 'color 0.2s'
        }}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <img src={product.image || 'https://via.placeholder.com/200'} alt={product.name} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 4 }} />
      <h3>{product.name}</h3>
      <p style={{ color: '#27ae60', fontWeight: 600 }}>{product.price.toLocaleString()} đ</p>
      <p>{product.shortDesc}</p>
      <button
        style={{ background: '#27ae60', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', cursor: 'pointer' }}
        onClick={() => onDetail(product)}
      >
        Xem chi tiết
      </button>
    </div>
  );
};
export default ProductCard; 