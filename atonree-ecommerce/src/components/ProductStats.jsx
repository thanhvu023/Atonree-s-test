import React from 'react';
import '../styles/ProductStats.css';

const ProductStats = ({ products, favorites, history }) => {
  const totalProducts = products.length;
  const totalFavorites = favorites?.length;
  const totalHistory = history?.length;
  
  const avgPrice = products.length > 0 
    ? products.reduce((sum, p) => sum + p.price, 0) / products.length 
    : 0;
  
  const priceRanges = {
    low: products.filter(p => p.price < 500000).length,
    medium: products.filter(p => p.price >= 500000 && p.price <= 1000000).length,
    high: products.filter(p => p.price > 1000000).length
  };

  return (
    <div className="product-stats">
      <h3 className="stats-title">📊 Thống kê</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-value">{totalProducts}</div>
          <div className="stat-label">Tổng sản phẩm</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <div className="stat-value">{totalFavorites}</div>
          <div className="stat-label">Yêu thích</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👁️</div>
          <div className="stat-value">{totalHistory}</div>
          <div className="stat-label">Đã xem</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-value">{avgPrice.toLocaleString()} đ</div>
          <div className="stat-label">Giá trung bình</div>
        </div>
      </div>
      
      <div className="price-ranges">
        <h4>Phân bố giá:</h4>
        <div className="range-bars">
          <div className="range-item">
            <span>Dưới 500K</span>
            <div className="range-bar">
              <div 
                className="range-fill" 
                style={{ width: `${(priceRanges.low / totalProducts) * 100}%` }}
              ></div>
            </div>
            <span>{priceRanges.low}</span>
          </div>
          
          <div className="range-item">
            <span>500K - 1M</span>
            <div className="range-bar">
              <div 
                className="range-fill" 
                style={{ width: `${(priceRanges.medium / totalProducts) * 100}%` }}
              ></div>
            </div>
            <span>{priceRanges.medium}</span>
          </div>
          
          <div className="range-item">
            <span>Trên 1M</span>
            <div className="range-bar">
              <div 
                className="range-fill" 
                style={{ width: `${(priceRanges.high / totalProducts) * 100}%` }}
              ></div>
            </div>
            <span>{priceRanges.high}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStats; 