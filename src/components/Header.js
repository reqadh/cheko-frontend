import React from 'react';
import '../styles/Header.css';

const Header = ({ currentTab, setCurrentTab, isDarkMode, toggleDarkMode }) => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="nav-tabs">
          <button
            className={currentTab === 'home' ? 'active' : ''}
            onClick={() => setCurrentTab('home')}
          >
            Home
          </button>
          <button
            className={currentTab === 'map' ? 'active' : ''}
            onClick={() => setCurrentTab('map')}
          >
            Map
          </button>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <div className="filter-icon">
          <span>≡</span>
          <span>Filter</span>
        </div>
        <button className="search-btn">Search</button>
      </div>

      <div className="theme-toggle" onClick={toggleDarkMode}>
        <span className="sun">☀️</span>
        <div className={`toggle-switch ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="circle" />
        </div>
        <span className="moon">🌙</span>
      </div>
    </div>
  );
};

export default Header;