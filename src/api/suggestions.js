// Mock API gợi ý sản phẩm
export const getSuggestions = (userId) => {
  // Trả về danh sách sản phẩm gợi ý (hardcode)
  return [
    {
      id: 2,
      name: 'Sản phẩm gợi ý',
      price: 900000,
      image: '',
      shortDesc: 'Mô tả ngắn sản phẩm gợi ý',
      longDesc: 'Mô tả dài sản phẩm gợi ý',
      rating: 5
    }
  ];
}; 