import React, { useState } from 'react';
import '../styles/MenuItemCard.css';

const MenuItemCard = ({ item, onClick }) => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="menu-card" onClick={() => onClick(item)}>
      <div className="menu-image-container">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="menu-image"
        loading="lazy"
        onError={(e) => (e.target.style.display = 'none')}
      />      
      </div>
      <div className="menu-details">
        <h3 className="menu-title">{item.name}</h3>
        <p className="menu-calories">{item.calories} Cal</p>
        {item.bestSale && <div className="best-sale">Best Sale</div>}

        <div className="menu-bottom">
          <span className="menu-price">{(item.price * quantity || item.price).toFixed(2)} SR</span>
          <div className="menu-quantity-controls" onClick={(e) => e.stopPropagation()}>
            <button className="qty-btn" onClick={decrease}>−</button>
            <span className="qty-number">{quantity}</span>
            <button className="qty-btn" onClick={increase}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
