import React from "react";
import { useCart } from "../hooks/useCart";
import { useFavorites } from "../hooks/useFavorites";
import type { Product } from "../context/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
  onDetail?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDetail }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Đã thêm vào giỏ hàng!");
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
      toast.info("Đã xóa khỏi yêu thích");
    } else {
      addToFavorites(product);
      toast.success("Đã thêm vào yêu thích!");
    }
  };

  return (
    <div className="product-card">
      <button
        className={`favorite-button ${isFavorite(product.id) ? 'favorited' : ''}`}
        onClick={handleToggleFavorite}
        title={isFavorite(product.id) ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
      >
        {isFavorite(product.id) ? '❤️' : '🤍'}
      </button>
      <img src={product.image as string} alt={product.name as string} className="product-card-image" />
      <h3 className="product-card-title">{product.name}</h3>
      <p className="product-card-desc">{product.description as string}</p>
      <p className="product-card-price">{product.price.toLocaleString('vi-VN')} ₫</p>
      <div className="product-card-actions">
        <button className="view-details-btn" onClick={() => onDetail && onDetail(product)}>Xem chi tiết</button>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 