// Mock API gợi ý sản phẩm nâng cao
import { products } from './products';

export const getSuggestions = (userId, keyword = '') => {
  // Lấy history, favorites từ localStorage
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const viewedIds = history.map(item => item.id);
  const favoriteIds = Array.isArray(favorites) ? favorites : [];

  let filtered = products;

  // Lọc theo userId (demo: user2 chỉ thấy sản phẩm giá > 1 triệu)
  if (userId === 'user2') {
    filtered = filtered.filter(p => p.price > 1000000);
  }

  // Lọc theo keyword
  const kw = keyword.toLowerCase();
  if (kw.includes('dưới 500k')) {
    filtered = filtered.filter(p => p.price < 500000);
  } else if (kw.includes('trên 1 triệu') || kw.includes('>1 triệu')) {
    filtered = filtered.filter(p => p.price > 1000000);
  } else if (kw.includes('500k') && (kw.includes('1 triệu') || kw.includes('1tr'))) {
    filtered = filtered.filter(p => p.price >= 500000 && p.price <= 1000000);
  } else if (kw) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(kw));
  }

  // Ưu tiên sản phẩm chưa từng xem hoặc thích
  filtered = filtered.filter(p => !viewedIds.includes(p.id) && !favoriteIds.includes(p.id));

  // Nếu không đủ, lấy random
  if (filtered.length === 0) {
    filtered = products.slice(0, 3);
  }

  return filtered.slice(0, 5);
}; 