import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import CartModal from './CartModal';
import '../styles/Header.css';

const Header = () => {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="antoree-header">
        <div className="header-container">
          <div className="logo">
            <span style={{ color: '#27ae60', fontWeight: 700, fontSize: 28 }}>antoree</span>
          </div>
          <nav className="nav-menu">
            <a href="#">Giáo viên</a>
            <a href="#">Cộng đồng</a>
            <a href="#">Đánh giá của học viên</a>
            <a href="#">Về chúng tôi</a>
          </nav>
          <div className="header-actions">
            <button className="cta-btn">Học thử MIỄN PHÍ ngay</button>
            <button className="login-btn">Đăng nhập</button>
            <button 
              className="cart-icon-btn"
              onClick={() => setIsCartOpen(true)}
              title="Giỏ hàng"
            >
              🛒
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default Header; 