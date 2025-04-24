import React, { useEffect, useState } from 'react';
import MenuItemCard from './MenuItemCard';
import ItemPopup from './ItemPopup';
import '../styles/MenuList.css';

const MenuList = ({ selectedCategoryId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/menu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: selectedCategoryId
            ? JSON.stringify({ categoryId: selectedCategoryId })
            : null,
        });
  
        const data = await response.json();
        setMenuItems(data.data); 
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };
  
    fetchMenu();
  }, [selectedCategoryId]);
  return (
    <div className="menu-list">
      {menuItems.map((item) => (
        <MenuItemCard key={item.id} item={item} onClick={setSelectedItem} />
      ))}

      {selectedItem && (
        <ItemPopup item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default MenuList;
