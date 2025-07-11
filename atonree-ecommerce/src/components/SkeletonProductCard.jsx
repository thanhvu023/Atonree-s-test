import React from 'react';
import '../styles/SkeletonProductCard.css';

const SkeletonProductCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img shimmer"></div>
      <div className="skeleton-title shimmer"></div>
      <div className="skeleton-price shimmer"></div>
      <div className="skeleton-desc shimmer"></div>
      <div className="skeleton-btn shimmer"></div>
    </div>
  );
};
export default SkeletonProductCard; 