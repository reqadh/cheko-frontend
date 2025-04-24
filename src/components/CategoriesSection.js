import React, {useState } from 'react';
import CategoryCard from './CategoryCard';
import '../styles/CategoriesSection.css';

const categoryColors = ['#FFFFFF'];


const CategoriesSection = ({ selectedCategoryId, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  fetch('http://localhost:8080/api/categories')
  .then((res) => res.json())
  .then((json) => {
    console.log('Categories API response:', json);
    setCategories(json.data);
  })
  .catch((err) => console.error('Error fetching categories:', err));

  

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          id={category.id}
          name={category.name}
          logoUrl={category.logoUrl} 
          itemCount={category.itemCount || 0}
          color={categoryColors[index % categoryColors.length]}
          isSelected={selectedCategoryId === category.id}
          onClick={() => onSelectCategory(category.id, category.name)}
        />
      ))}
    </div>
  );
};

export default CategoriesSection;
