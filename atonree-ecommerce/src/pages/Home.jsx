import React, { useState } from 'react';
import { products as mockProducts } from '../api/products';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

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
      <h2>Danh sách sản phẩm</h2>
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      <ProductList products={filteredProducts} />
    </div>
  );
};
export default Home; 