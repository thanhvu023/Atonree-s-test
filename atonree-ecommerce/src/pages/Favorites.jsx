import React, { useState } from 'react';
import { products as mockProducts } from '../api/products';
import ProductList from '../components/ProductList';
import ProductModal from '../components/ProductModal';

const Favorites = ({ favorites, onFavorite }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
          onFavorite={onFavorite}
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