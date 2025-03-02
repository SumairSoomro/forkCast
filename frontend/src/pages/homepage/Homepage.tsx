import React from "react";
import SearchBar from '../../components/SearchBar';
import RecipeList from '../../components/RecipeList/RecipeList';
import Navbar from '../../components/Navbar/Navbar';
import { getPopularRecipes, recipes, Recipe } from '../../data/recipes';
import './Homepage.css';

const HomePage: React.FC = () => {

  const navItems = [
    { label: 'Profile', path: '/profile' },
    { label: 'Calendar', path: '/calendar' },
    { label: 'Favorites', path: '/favorites' }
  ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    console.log('Clicked recipe:', recipe);
  };

  const favoriteRecipes = recipes.slice(0, 15);
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <h1 className="footer-title">Welcome to Forkcast!</h1>
          <p className="footer-text">Discover and organize your favorite recipes.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
