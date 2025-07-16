import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import ProductCard from '../components/ProductCard';
import { toast } from 'react-toastify';
import './Favorites.css';

const Favorites: React.FC = () => {
  const { favorites, clearFavorites } = useFavorites();

  const handleClearFavorites = () => {
    clearFavorites();
    toast.info('Đã xóa tất cả sản phẩm yêu thích');
  };

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="favorites-header">
          <h1>Danh sách yêu thích</h1>
          <p>Bạn có {favorites.length} sản phẩm trong danh sách yêu thích</p>
          {favorites.length > 0 && (
            <button 
              className="clear-favorites-btn"
              onClick={handleClearFavorites}
            >
              Xóa tất cả yêu thích
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <div className="favorites-empty">
            <div className="empty-icon">💔</div>
            <h2>Danh sách yêu thích trống</h2>
            <p>Bạn chưa có sản phẩm nào trong danh sách yêu thích</p>
            <p>Hãy khám phá các khóa học và thêm vào yêu thích!</p>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites; 