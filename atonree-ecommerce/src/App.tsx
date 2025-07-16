import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import History from './pages/History.jsx';
import ChatbotBox from './components/ChatbotBox';
import { getSuggestions } from './api/suggestions';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Hàm gọi API gợi ý cho ChatbotBox
  const handleChatbotSuggest = async (userId: string, keyword: string) => {
    // Giả lập delay
    await new Promise(res => setTimeout(res, 700));
    return getSuggestions(userId, keyword);
  };

  return (
    <div>
      <Header />
      <ToastContainer position="top-right" autoClose={2500} />
      <div style={{ padding: '16px 24px', textAlign: 'center' }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            background: currentPage === 'home' ? '#27ae60' : '#f5f6fa',
            color: currentPage === 'home' ? '#fff' : '#333',
            border: 'none',
            borderRadius: 4,
            padding: '8px 16px',
            margin: '0 8px',
            cursor: 'pointer'
          }}
        >
          Trang chủ
        </button>
        <button
          onClick={() => setCurrentPage('favorites')}
          style={{
            background: currentPage === 'favorites' ? '#27ae60' : '#f5f6fa',
            color: currentPage === 'favorites' ? '#fff' : '#333',
            border: 'none',
            borderRadius: 4,
            padding: '8px 16px',
            margin: '0 8px',
            cursor: 'pointer'
          }}
        >
          Yêu thích
        </button>
        <button
          onClick={() => setCurrentPage('history')}
          style={{
            background: currentPage === 'history' ? '#27ae60' : '#f5f6fa',
            color: currentPage === 'history' ? '#fff' : '#333',
            border: 'none',
            borderRadius: 4,
            padding: '8px 16px',
            margin: '0 8px',
            cursor: 'pointer'
          }}
        >
          Lịch sử xem
        </button>
      </div>
      {currentPage === 'home' ? (
        <Home />
      ) : currentPage === 'favorites' ? (
        <Favorites />
      ) : (
        <History />
      )}
      <ChatbotBox onSend={handleChatbotSuggest} />
    </div>
  );
}

export default App;
