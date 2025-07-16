import React from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import './CartModal.css';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      toast.info('Sản phẩm đã được xóa khỏi giỏ hàng');
    } else {
      updateQuantity(productId, newQuantity);
      toast.success('Đã cập nhật số lượng sản phẩm');
    }
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast.info('Sản phẩm đã được xóa khỏi giỏ hàng');
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning('Giỏ hàng trống!');
      return;
    }
    toast.success('Chuyển đến trang thanh toán...');
    onClose();
    // TODO: Navigate to checkout page
  };

  const handleClearCart = () => {
    clearCart();
    toast.info('Đã xóa tất cả sản phẩm khỏi giỏ hàng');
  };

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2>Giỏ hàng ({cart.length} sản phẩm)</h2>
          <button className="cart-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Giỏ hàng trống</p>
              <p>Hãy thêm sản phẩm vào giỏ hàng để bắt đầu mua sắm</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">
                        {item.price.toLocaleString('vi-VN')} ₫
                      </p>
                      <div className="cart-item-actions">
                        <div className="quantity-controls">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span className="quantity-display">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="remove-btn"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-total">
                  <span>Tổng cộng:</span>
                  <span className="total-price">
                    {totalPrice.toLocaleString('vi-VN')} ₫
                  </span>
                </div>
                <div className="cart-actions">
                  <button onClick={handleClearCart} className="clear-cart-btn">
                    Xóa giỏ hàng
                  </button>
                  <button onClick={handleCheckout} className="checkout-btn">
                    Thanh toán
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal; 