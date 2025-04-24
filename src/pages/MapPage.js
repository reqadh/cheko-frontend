import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Header from '../components/Header';
import '../styles/MapPage.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicnFhZGhhYmkiLCJhIjoiY205cGQzeGNuMDQ0MzJrc2N2NDFyNDNmeSJ9.yL7A_KjZCbpSTI4aA7nEWA';

const MapPage = ({ isDarkMode, toggleDarkMode, currentTab, setCurrentTab }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const markerRefs = useRef({});

  useEffect(() => {
    fetch('http://localhost:8080/api/restaurants')
      .then((res) => res.json())
      .then((data) => {
        const list = data.data || data;
        setRestaurants(list);
      })
      .catch((err) => console.error('Error fetching restaurants:', err));
  }, []);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [46.6510, 24.6359],
      zoom: 13
    });
  }, []);

  useEffect(() => {
    if (!mapInstance.current || restaurants.length === 0) return;

    Object.values(markerRefs.current).forEach((m) => m.remove());
    markerRefs.current = {};

    restaurants.forEach((restaurant) => {
      const isSelected = selectedRestaurant?.id === restaurant.id;

      const marker = new mapboxgl.Marker({ color: isSelected ? '#F4CBDF' : 'black' })
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(mapInstance.current);

      marker.getElement().addEventListener('click', (e) => {
        e.stopPropagation();
        setSelectedRestaurant(restaurant);
      });

      markerRefs.current[restaurant.id] = marker;
    });
  }, [restaurants, selectedRestaurant]);

  useEffect(() => {
    const handleOutsideClick = () => setSelectedRestaurant(null);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="map-page">
      <div className="top-bar">
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>

      <div ref={mapRef} className="map-container" />

      {selectedRestaurant && (
        <div className="popup-overlay">
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedRestaurant.logoUrl || '/images/default-logo.png'}
              className="restaurant-logo"
              alt="logo"
            />
<div className="restaurant-info">
  <h3>{selectedRestaurant.name}</h3>
  <div className="menu-row">
    <span className="menu-label">menu list</span>
    <button className="view-menu-btn">
      <span className="arrow-icon">›</span>
    </button>
  </div>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
