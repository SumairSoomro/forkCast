import { useEffect, useState } from 'react';
import { fetchRecipes } from './mocks/mockAPI';
import Navbar from './components/Navbar/Navbar';
import RecipeList from './components/RecipeList/RecipeList';
import { Recipe } from './mocks/mockTypes';
import './App.css';

export const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
      const getRecipes = async () => {
        const data = await fetchRecipes();
        setRecipes(data);
      };
  
      getRecipes();
    }, []);
  
  const getPopularRecipes = () => {
    return recipes
      .sort((a, b) => b.views - a.views)
      .slice(0, 6);
  };
  const popularRecipes = getPopularRecipes();
  
  const handleRecipeClick = (recipe: Recipe): void => {
    console.log("Navigating to recipe:", recipe.title); // needs implementation
  };

  const navItems = [
    { label: 'Homepage', path: '/homepage' },
    { label: 'Calendar', path: '/signup' },
    { label: 'Login', path: '/login' },
    { label: 'Sign Up', path: '/signup' },
    { label: 'Contact Us', path: '/contact' }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar brand="Forkcast" items={navItems} />
      
      <main className="flex-grow">
        <section className="hero-section animate-fade-in">
          <div className="container">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
              Discover Culinary Magic
              <span className="text-primary-green"> with Forkcast</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your ingredients into extraordinary meals. Get personalized recipes, 
              smart cooking timelines, and chef-inspired recommendations.
            </p>
            <a href="/signup" className="cta-button">
              Start Cooking Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        <section className="py-16 bg-gray-50 animate-fade-in">
          <div className="container">
            <RecipeList 
              recipes={popularRecipes}
              title="Trending Recipes"
              onRecipeClick={handleRecipeClick}
            />
          </div>
        </section>
      </main>
      
      <footer>
        <div className="container">
          <div className="footer-bottom">
            <p className="text-gray-400 text-sm">
              © 2024 Forkcast. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};