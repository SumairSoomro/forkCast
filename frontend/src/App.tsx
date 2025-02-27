import { useState } from 'react';
import { Menu, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
}

const App = () => {
  const [activeRecipe, setActiveRecipe] = useState<number>(0);
  
  const popularRecipes: Recipe[] = [
    { id: 1, name: "Garlic Butter Pasta", image: "/api/placeholder/200/200", description: "A simple, delicious pasta dish with garlic butter sauce." },
    { id: 2, name: "Avocado Toast", image: "/api/placeholder/200/200", description: "Creamy avocado on toasted bread with a sprinkle of sea salt." },
    { id: 3, name: "Chocolate Chip Cookies", image: "/api/placeholder/200/200", description: "Classic, chewy cookies with melty chocolate chips." },
    { id: 4, name: "Vegetable Stir Fry", image: "/api/placeholder/200/200", description: "Quick and healthy stir-fried vegetables with soy sauce." },
    { id: 5, name: "Berry Smoothie Bowl", image: "/api/placeholder/200/200", description: "Refreshing smoothie bowl topped with fresh berries and granola." }
  ];
  
  const handleRedirect = (): void => {
    alert("Redirecting to signup/login page");
  };
  
  const rotateCarousel = (direction: 'prev' | 'next'): void => {
    if (direction === 'next') {
      setActiveRecipe((prev) => (prev + 1) % popularRecipes.length);
    } else {
      setActiveRecipe((prev) => (prev - 1 + popularRecipes.length) % popularRecipes.length);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Forkcast</div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="hover:text-green-200">Login</a>
            <a href="#" className="hover:text-green-200">Sign Up</a>
            <a href="#" className="hover:text-green-200">Contact Us</a>
            <a href="https://github.com/SumairSoomro/forkCast" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
              <Github size={20} />
            </a>
          </div>
          
          <div className="md:hidden">
            <button className="text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      
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
            <h2 className="text-2xl font-semibold text-center mb-8">Popular Recipes</h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
                <button 
                  onClick={() => rotateCarousel('prev')} 
                  className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              
              <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
                <button 
                  onClick={() => rotateCarousel('next')} 
                  className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="overflow-hidden">
                <div className="flex justify-center">
                  <div 
                    className="w-full max-w-lg bg-gray-50 rounded-lg shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
                    onClick={handleRedirect}
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <img 
                        src={popularRecipes[activeRecipe].image} 
                        alt={popularRecipes[activeRecipe].name} 
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 text-green-700">
                          {popularRecipes[activeRecipe].name}
                        </h3>
                        <p className="text-gray-600">
                          {popularRecipes[activeRecipe].description}
                        </p>
                        <div className="mt-4">
                          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            Click to view recipe
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="flex justify-center mt-6 space-x-2">
                {popularRecipes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveRecipe(index)}
                    className={`h-3 w-3 rounded-full ${index === activeRecipe ? 'bg-green-600' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Forkcast. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;