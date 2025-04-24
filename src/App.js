import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import './styles/globals.css';
import './styles/theme.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTab, setCurrentTab] = useState('home'); // 'home' or 'map'

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      {currentTab === 'home' ? (
        <HomePage
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      ) : (
        <MapPage
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      )}
    </>
  );
}

export default App;
