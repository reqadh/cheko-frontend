import React, { useState } from 'react';
import CategoriesSection from '../components/CategoriesSection';
import MenuList from '../components/MenuList';
import ItemPopup from '../components/ItemPopup';
import Header from '../components/Header';



const HomePage = ({
  isDarkMode,
  toggleDarkMode,
  currentTab,
  setCurrentTab,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState('Breakfast');
  const [popupItem, setPopupItem] = useState(null);

  const handleCategorySelect = (id, name) => {
    setSelectedCategoryId(id);
    setSelectedCategoryName(name);
  };

  return (
    <div>

      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <CategoriesSection
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={handleCategorySelect}
      />
      <h2 style={{ marginLeft: '7rem' }}>{selectedCategoryName}</h2>
      <MenuList
        selectedCategoryId={selectedCategoryId}
        onItemClick={(item) => setPopupItem(item)}
      />
      <ItemPopup item={popupItem} onClose={() => setPopupItem(null)} />
    </div>
  );
};

export default HomePage;
