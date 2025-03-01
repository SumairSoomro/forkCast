import React from "react";
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import RecipeList from '../../components/RecipeList';
import { getPopularRecipes, recipes, Recipe } from '../../data/recipes';
import './Homepage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    console.log('Clicked recipe:', recipe);
  };

  const favoriteRecipes = recipes.slice(0, 15);
  const popularRecipes = getPopularRecipes().slice(0, 15);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-green-600 text-white py-4 px-6 w-full shadow-md sticky top-0 z-50">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Forkcast</div>

          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => navigate('/calendar')} 
              className="hover:text-green-200 transition-colors"
            >
              Calendar
            </button>
            <button 
              onClick={() => navigate('/favorites')} 
              className="hover:text-green-200 transition-colors"
            >
              Favorites
            </button>
            <button 
              onClick={() => navigate('/profile')} 
              className="hover:text-green-200 transition-colors"
            >
              Profile
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-8">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col gap-8">
          {/* Search Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Search Recipes</h2>
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Popular Recipes */}
          <div className="bg-white p-8 rounded-xl shadow-lg overflow-visible">
            <RecipeList 
              recipes={popularRecipes}
              title="Popular Recipes"
              onRecipeClick={handleRecipeClick}
            />
          </div>

          {/* Favorite Recipes */}
          <div className="bg-white p-8 rounded-xl shadow-lg overflow-visible">
            <RecipeList 
              recipes={favoriteRecipes}
              title="Your Favorites"
              onRecipeClick={handleRecipeClick}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3">Welcome to Forkcast!</h1>
          <p className="text-gray-600 text-lg">Discover and organize your favorite recipes.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
