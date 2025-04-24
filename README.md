# 🍽️ Cheko Restaurant Frontend

A modern and responsive React web application for browsing categorized restaurant menus and viewing restaurant locations on an interactive Mapbox map.

## 🚀 Features

- Interactive Home page with:
  - Categorized menu sections (e.g. Breakfast, Drinks, Sushi)
  - Default selected category with dynamic filtering
  - Search bar with filter icon and dark/light mode toggle 🌗
  - Menu cards with calorie info, prices, and best sale tags
- Interactive Map page using Mapbox GL 🗺️:
  - Restaurant location markers based on latitude and longitude
  - Pop-up with restaurant logo and name, plus “View Menu” button
- Light/Dark mode support

---

## 🎥 Cheko Preview

![Cheko Frontend Preview](./cheko-demo-preview.gif)

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cheko-frontend.git
cd cheko-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your Mapbox Token

Create a .env.local file and add your Mapbox access token:
> To use the Mapbox map, you need a valid [Mapbox](https://account.mapbox.com/) access token.

```bash
REACT_APP_MAPBOX_TOKEN=your_token_here
```

Then make sure you are using the token inside Map.js like this:
```bash
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

```

### 4. Start the React app

```bash
npm start
```

### 📁 Project Structure

```bash
cheko-frontend/
├── public/
│   └── images/         # Static assets (logos, category images, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # HomePage.js, MapPage.js
│   ├── styles/          # CSS files (globals.css, component styles, theme.css)
│   ├── App.js           # Main app routing & theme logic
│   └── index.js         # Entry point

```