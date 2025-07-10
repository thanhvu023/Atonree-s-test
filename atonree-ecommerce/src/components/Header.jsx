import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
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
        </div>
      </div>
    </header>
  );
};
export default Header; 