import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductModal from '../components/ProductModal';
import { useFavorites } from '../hooks/useFavorites';
import { products as mockProducts } from '../api/products';

const Favorites = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { favorites } = useFavorites();

  // Lọc sản phẩm yêu thích dựa trên id
  const favoriteProducts = mockProducts.filter(product =>
    favorites.some(fav => fav.id === product.id)
  );

  return (
    <div>
      <h2>Danh sách yêu thích</h2>
      <ProductList
        products={favoriteProducts}
        onDetail={setSelectedProduct}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Favorites; 