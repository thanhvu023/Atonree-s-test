import React, { useState } from 'react';
import { products as mockProducts } from '../api/products';
import { getSuggestions } from '../api/suggestions';
import ProductList from '../components/ProductList';
import HeroBanner from '../components/HeroBanner';
import SearchPanel from '../components/SearchPanel';
import ProductModal from '../components/ProductModal';
import SkeletonProductCard from '../components/SkeletonProductCard';

const Home = ({ favorites, onFavorite }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State cho gợi ý thông minh
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [isLoadingSuggest, setIsLoadingSuggest] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [suggestError, setSuggestError] = useState('');

  // State loading cho search/filter
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  // Callback cho nút gợi ý AI
  const handleSuggest = () => {
    setIsSuggesting(true);
    setIsLoadingSuggest(true);
    setSuggestError('');
    // Giả lập gọi API (setTimeout)
    setTimeout(() => {
      try {
        if (Math.random() < 0.15) throw new Error('API lỗi!');
        const data = getSuggestions('user1');
        setSuggestedProducts(data);
        setIsLoadingSuggest(false);
      } catch (err) {
        setSuggestError('Không thể lấy gợi ý lúc này');
        setIsLoadingSuggest(false);
      }
    }, 1200);
  };

  // Quay lại danh sách sản phẩm bình thường
  const handleBackToList = () => {
    setIsSuggesting(false);
    setSuggestedProducts([]);
    setSuggestError('');
  };

  // Callback cho nút tìm kiếm (có thể dùng chung với input)
  const handleFind = () => {
    // Có thể trigger lại filter nếu muốn
  };

  // Khi search/filter thay đổi, giả lập loading
  React.useEffect(() => {
    if (!isSuggesting) {
      setIsLoadingSearch(true);
      const timeout = setTimeout(() => setIsLoadingSearch(false), 700);
      return () => clearTimeout(timeout);
    }
  }, [search, filter, isSuggesting]);

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
      {isSuggesting ? (
        <div style={{textAlign: 'center', margin: '32px 0'}}>
          <h2>Sản phẩm gợi ý cho bạn</h2>
          {isLoadingSuggest ? (
            <div style={{display: 'flex', gap: 24, justifyContent: 'center'}}>
              {[1,2,3,4].map(i => <SkeletonProductCard key={i} />)}
            </div>
          ) : suggestError ? (
            <div style={{color: 'red', margin: '16px 0'}}>{suggestError}</div>
          ) : (
            <ProductList
              products={suggestedProducts}
              onDetail={setSelectedProduct}
              onFavorite={onFavorite}
              favorites={favorites}
            />
          )}
          <button onClick={handleBackToList} style={{marginTop: 24, background: '#27ae60', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 20px', cursor: 'pointer'}}>Quay lại</button>
        </div>
      ) : (
        <>
          <h2 style={{textAlign: 'center', margin: '32px 0 16px 0'}}>Danh sách sản phẩm</h2>
          {isLoadingSearch ? (
            <div style={{display: 'flex', gap: 24, justifyContent: 'center'}}>
              {[1,2,3,4].map(i => <SkeletonProductCard key={i} />)}
            </div>
          ) : (
            <ProductList
              products={filteredProducts}
              onDetail={setSelectedProduct}
              onFavorite={onFavorite}
              favorites={favorites}
            />
          )}
        </>
      )}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};
export default Home; 