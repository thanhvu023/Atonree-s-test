import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} style={{ padding: 8, marginLeft: 16, borderRadius: 4, border: '1px solid #ccc' }}>
      <option value="all">Tất cả giá</option>
      <option value="<500K">Dưới 500K</option>
      <option value="500K-1M">500K - 1 triệu</option>
      <option value=">1M">Trên 1 triệu</option>
    </select>
  );
};
export default Filter; 