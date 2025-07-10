import React from 'react';
import '../styles/SearchPanel.css';
import { FaSearch } from 'react-icons/fa';

const SearchPanel = ({ search, onSearchChange, filter, onFilterChange, onSuggest, onFind }) => {
  return (
    <div className="search-panel">
      <div className="search-input-group">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Bạn muốn tìm sản phẩm gì?"
          value={search}
          onChange={onSearchChange}
          className="search-input"
        />
      </div>
      <select className="search-dropdown" value={filter} onChange={onFilterChange}>
        <option value="all">Tất cả giá</option>
        <option value="<500K">Dưới 500K</option>
        <option value="500K-1M">500K - 1 triệu</option>
        <option value=">1M">Trên 1 triệu</option>
      </select>
      <button className="suggest-btn" onClick={onSuggest}>Gợi ý sản phẩm phù hợp</button>
      <button className="find-btn" onClick={onFind}>Tìm sản phẩm</button>
    </div>
  );
};
export default SearchPanel; 