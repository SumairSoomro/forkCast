import { useEffect, useState } from 'react';
import { fetchRecipes } from './mocks/mockAPI';
import Navbar from './components/Navbar/Navbar';
import RecipeList from './components/RecipeList/RecipeList';
import Footer from './components/Footer/Footer';
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
    alert("Redirecting to recipe page for " + recipe.title);
  };

  const navItems = [
    { label: 'Homepage', path: '/homepage' },
    { label: 'Login', path: '/login' },
    { label: 'Sign Up', path: '/signup' },
    { label: 'Contact Us', path: '/contact' }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar brand="Forkcast" items={navItems} />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <section className="mb-12 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to Forkcast</h1>
            <p className="text-lg text-gray-700">
              Forkcast is your personal recipe discovery platform. We help you find delicious recipes 
              based on ingredients you love, and tell you when to buy, prep, cook, and most importantly,
              enjoy! Check out some of our popular recipes below, and you won't be disappointed!
            </p>
          </section>

          <section className="mb-16">
            <RecipeList 
              recipes={popularRecipes}
              title="Popular Recipes"
              onRecipeClick={handleRecipeClick}
            />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
