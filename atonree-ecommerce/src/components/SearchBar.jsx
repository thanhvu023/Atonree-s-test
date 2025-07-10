import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      value={value}
      onChange={onChange}
      style={{ padding: 8, width: 300, marginBottom: 16, borderRadius: 4, border: '1px solid #ccc' }}
    />
  );
};
export default SearchBar; 