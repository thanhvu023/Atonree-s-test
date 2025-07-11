import React, { useState, useEffect } from 'react';
import { products as mockProducts } from '../api/products';
import ProductList from '../components/ProductList';
import HeroBanner from '../components/HeroBanner';
import SearchPanel from '../components/SearchPanel';
import ProductModal from '../components/ProductModal';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Load favorites từ localStorage khi component mount
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

  // Callback cho nút gợi ý AI (sẽ làm sau)
  const handleSuggest = () => {
    alert('Gợi ý sản phẩm phù hợp (sẽ tích hợp AI sau)');
  };

  // Callback cho nút tìm kiếm (có thể dùng chung với input)
  const handleFind = () => {
    // Có thể trigger lại filter nếu muốn
  };

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

  // Lọc sản phẩm theo tên và giá
  const filteredProducts = mockProducts.filter((product) => {
    const matchName = product.name.toLowerCase().includes(search.toLowerCase());
    let matchPrice = true;
    if (filter === '<500K') matchPrice = product.price < 500000;
    else if (filter === '500K-1M') matchPrice = product.price >= 500000 && product.price <= 1000000;
    else if (filter === '>1M') matchPrice = product.price > 1000000;
    return matchName && matchPrice;
  });

  return (
    <div>
      <HeroBanner />
      <SearchPanel
        search={search}
        onSearchChange={e => setSearch(e.target.value)}
        filter={filter}
        onFilterChange={e => setFilter(e.target.value)}
        onSuggest={handleSuggest}
        onFind={handleFind}
      />
      <h2 style={{textAlign: 'center', margin: '32px 0 16px 0'}}>Danh sách sản phẩm</h2>
      <ProductList
        products={filteredProducts}
        onDetail={setSelectedProduct}
        onFavorite={handleFavorite}
        favorites={favorites}
      />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};
export default Home; 