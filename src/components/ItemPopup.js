import React, { useState } from 'react';
import '../styles/ItemPopup.css';

const ItemPopup = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(0);

  if (!item) return null;

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>×</button>

        <div className="popup-header">
          <h2 className="popup-title">{item.name}</h2>
          {item.bestSale && <span className="popup-badge">Best Sale</span>}
        </div>

        <p className="popup-calories">{item.calories} Cal</p>
        <p className="popup-description">{item.description}</p>

        <img src={item.imageUrl} alt={item.name} className="popup-image" />

        <div className="popup-bottom">
          <div className="popup-counter">
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
          </div>
          <span className="popup-price">{totalPrice} SR</span>
        </div>
      </div>
    </div>
  );
};

export default ItemPopup;
