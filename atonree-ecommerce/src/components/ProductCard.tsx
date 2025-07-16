import React from "react";
import { useCart } from "../hooks/useCart";
import type { Product } from "../context/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Đã thêm vào giỏ hàng!");
  };

  return (
    <div className="product-card">
      <img src={product.image as string} alt={product.name as string} />
      <h3>{product.name}</h3>
      <p>{product.description as string}</p>
      <p className="price">{product.price}₫</p>
      <div className="product-card-actions">
        <button className="view-details-btn">Xem chi tiết</button>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 