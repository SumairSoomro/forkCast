import React from "react";
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeList from '../../components/RecipeList/RecipeList';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import { getPopularRecipes, recipes, Recipe } from '../../data/recipes';

import './Homepage.css';

const HomePage: React.FC = () => {

  const navItems = [
    { label: 'Homepage', path: '/homepage' },
    { label: "Profile", path: "/profile" },
    { label: "Calendar", path: "/calendar" },
    { label: "Favorites", path: "/favorites" },
    { label: 'Contact Us', path: '/contact' }
  ];

  const handleSearch = (query: string) => {
    alert('Searching for: ' + query);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    console.log('Clicked recipe:', recipe.title);
  };

  const favoriteRecipes = recipes.slice(6, 12);
  const popularRecipes = getPopularRecipes().slice(0, 15);

  return (
    <div className="homepage">
      <Navbar brand="Forkcast" items={navItems} />

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Search Section */}
          <div className="section">
            <h2 className="section-title">Search Recipes</h2>
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Popular Recipes */}
          <div className="section">
            <RecipeList 
              recipes={popularRecipes}
              title="Popular Recipes"
              onRecipeClick={handleRecipeClick}
            />
          </div>

          {/* Favorite Recipes */}
          <div className="section">
            <RecipeList 
              recipes={favoriteRecipes}
              title="Your Favorites"
              onRecipeClick={handleRecipeClick}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
