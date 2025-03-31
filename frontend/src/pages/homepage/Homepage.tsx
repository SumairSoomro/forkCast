import React, { useState, useEffect } from "react";
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeList from '../../components/RecipeList/RecipeList';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { fetchRecipes } from "../../mocks/mockAPI";
import { Recipe } from "../../mocks/mockTypes";
import './Homepage.css';


const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      const data = await fetchRecipes();
      setRecipes(data);
      setLoading(false);
    };

    getRecipes();
  }, []);

  const getPopularRecipes = () => {
    return recipes
      .sort((a, b) => b.views - a.views)
      .slice(0, 6);
  };

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

      <main className="main-content">
        <div className="content-container">
          {loading ? (
            <div className="loading-message">Loading...</div>
          ) : (
            <>
              <div className="section">
                <h2 className="section-title">Search Recipes</h2>
                <SearchBar onSearch={handleSearch} />
              </div>

              <div className="section">
                <RecipeList 
                  recipes={popularRecipes}
                  title="Popular Recipes"
                  onRecipeClick={handleRecipeClick}
                />
              </div>

              <div className="section">
                <RecipeList 
                  recipes={favoriteRecipes}
                  title="Your Favorites"
                  onRecipeClick={handleRecipeClick}
                />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;