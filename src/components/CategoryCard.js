import React from 'react';
import '../styles/CategoryCard.css';

const CategoryCard = ({ id, name, itemCount, color, isSelected, onClick, logoUrl }) => {
  return (
<div
  className={`category-card ${isSelected ? 'selected' : ''}`}
  onClick={onClick}
>
  <img src={logoUrl} alt={name} className="category-image" />
  <div className="category-text">
    <h3>{name}</h3>
    <p>{itemCount} items</p>
  </div>
</div>

  );
};

export default CategoryCard;
