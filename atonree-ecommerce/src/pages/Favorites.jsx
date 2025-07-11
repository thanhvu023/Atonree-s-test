import React, { useState, useEffect } from 'react';
import { products as mockProducts } from '../api/products';
import ProductList from '../components/ProductList';
import ProductModal from '../components/ProductModal';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load favorites từ localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Lưu favorites vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle yêu thích sản phẩm
  const handleFavorite = (productId) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Lọc sản phẩm yêu thích
  const favoriteProducts = mockProducts.filter(product => favorites.includes(product.id));

  return (
    <div>
      <h2 style={{textAlign: 'center', margin: '32px 0 16px 0'}}>Sản phẩm yêu thích</h2>
      {favoriteProducts.length === 0 ? (
        <div style={{textAlign: 'center', color: '#888', margin: '40px 0'}}>
          Bạn chưa có sản phẩm yêu thích nào.
        </div>
      ) : (
        <ProductList
          products={favoriteProducts}
          onDetail={setSelectedProduct}
          onFavorite={handleFavorite}
          favorites={favorites}
        />
      )}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};
export default Favorites; 