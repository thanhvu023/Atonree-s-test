import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductModal from '../components/ProductModal';
import { toast } from 'react-toastify';

const History = () => {
  const [history, setHistory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('history') || '[]');
    setHistory(data);
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem('history');
    setHistory([]);
    toast.success('Đã xóa lịch sử xem sản phẩm!');
  };

  return (
    <div>
      <h2 style={{textAlign: 'center', margin: '32px 0 16px 0'}}>Lịch sử xem sản phẩm</h2>
      <div style={{textAlign: 'center', marginBottom: 24}}>
        <button
          onClick={handleClearHistory}
          style={{background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 20px', cursor: 'pointer'}}>
          Xóa lịch sử
        </button>
      </div>
      {history.length === 0 ? (
        <div style={{textAlign: 'center', color: '#888', margin: '40px 0'}}>
          Bạn chưa xem sản phẩm nào.
        </div>
      ) : (
        <ProductList
          products={history}
          onDetail={setSelectedProduct}
          onFavorite={() => {}}
          favorites={[]}
        />
      )}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};
export default History; 