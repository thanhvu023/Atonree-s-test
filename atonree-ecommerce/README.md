# Nền tảng thương mại điện tử giáo dục Atonree

Một dự án React hiện đại mô phỏng sàn thương mại điện tử giáo dục tích hợp AI, nơi người dùng có thể tìm kiếm, khám phá, yêu thích, thêm vào giỏ hàng và nhận gợi ý thông minh cho các khoá học/sản phẩm giáo dục.

---

## 🚀 Tính năng nổi bật

### 1. Danh sách & chi tiết sản phẩm
- Hiển thị danh sách sản phẩm với tên, giá, ảnh, mô tả ngắn.
- Nút "Xem chi tiết" mở modal với thông tin đầy đủ, ảnh lớn, mô tả dài, đánh giá.

### 2. Tìm kiếm & lọc
- Thanh tìm kiếm theo tên sản phẩm, realtime.
- Bộ lọc giá: <500K, 500K–1 triệu, >1 triệu.

### 3. Gợi ý thông minh (AI)
- Nút "Gợi ý sản phẩm phù hợp" dựa trên hành vi (đã xem, đã thích, trong giỏ hàng).
- Loading skeleton khi lấy gợi ý, toast thông báo lỗi nếu API fail.

### 4. Chatbot AI tư vấn
- Chatbox hiện đại, giao diện nổi bật, responsive.
- Gợi ý sản phẩm theo từ khoá nhập (VD: "học tiếng Anh", "dưới 1 triệu").
- Hỗ trợ nhiều user, mock logic AI.

### 5. Yêu thích (Favorites)
- Đánh dấu sản phẩm yêu thích, lưu bằng localStorage.
- Trang riêng hiển thị danh sách yêu thích.
- Toast thông báo khi thêm/xoá yêu thích.

### 6. Giỏ hàng (Cart)
- Thêm sản phẩm vào giỏ từ ProductCard.
- Modal giỏ hàng popup từ icon trên header.
- Quản lý số lượng, xoá sản phẩm, tính tổng tiền.
- Responsive, hiệu ứng mượt, UI đồng bộ.

### 7. Lịch sử xem
- Tự động lưu sản phẩm đã xem.
- Trang riêng xem lịch sử, có thể xoá toàn bộ.

### 8. UI/UX hiện đại
- Thiết kế responsive, mobile-first.
- Màu sắc, font chữ đồng bộ thương hiệu.
- Hiệu ứng hover, transition, shadow, gradient, dark mode.
- Skeleton loading, toast, modal, animation mượt mà.

---

## 🛠️ Công nghệ sử dụng
- **React 18 + Vite**
- **TypeScript**
- **React Context**
- **Axios** 
- **React Toastify** 
- **LocalStorage** 
- **CSS Modules, CSS Variables**

---

## 📁 Cấu trúc thư mục

```
src/
├── components/          # Các component UI
│   ├── Header.tsx
│   ├── ProductList.tsx
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   ├── CartModal.tsx
│   ├── ChatbotBox.tsx
│   └── ...
├── context/             # Context quản lý state
│   ├── FavoritesContext.tsx
│   ├── CartContext.tsx
│   └── ...
├── pages/               # Các trang chính
│   ├── Home.tsx
│   ├── Favorites.tsx
│   ├── History.tsx
│   └── ...
├── api/                 # Mock API
│   ├── products.ts
│   └── suggestions.ts
├── styles/              # CSS, biến màu, global style
└── App.tsx              # Component gốc
```

---

## 🚦 Hướng dẫn cài đặt & chạy dự án

1. **Cài đặt dependencies:**
   ```bash
   npm install
   ```
2. **Chạy chế độ phát triển:**
   ```bash
   npm run dev
   ```
3. **Build production:**
   ```bash
   npm run build
   ```

---

## 🎯 Hướng dẫn sử dụng tính năng

- **Tìm kiếm/Lọc:** Nhập tên sản phẩm hoặc chọn khoảng giá để lọc.
- **Gợi ý AI:** Nhấn nút "Gợi ý sản phẩm phù hợp" để nhận đề xuất thông minh.
- **Chatbot AI:** Nhấn icon chat, chọn user, nhập từ khoá để nhận gợi ý.
- **Yêu thích:** Nhấn icon ❤️ trên sản phẩm để thêm/xoá khỏi danh sách yêu thích.
- **Giỏ hàng:** Nhấn "Thêm vào giỏ" trên sản phẩm, xem giỏ hàng ở icon trên header, quản lý số lượng/xoá/tính tổng tiền.
- **Lịch sử xem:** Xem lại các sản phẩm đã click ở trang "Lịch sử xem".

---


## 🔮 Roadmap thực tế
- [x] Danh sách, chi tiết sản phẩm
- [x] Tìm kiếm, lọc giá
- [x] Gợi ý AI, chatbot AI
- [x] Yêu thích (favorites)
- [x] Lịch sử xem
- [x] Giỏ hàng (cart)
- [x] UI/UX hiện đại, responsive


---




