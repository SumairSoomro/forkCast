import React from 'react';
import { Recipe } from '../data/recipes';
import { Star, ChevronLeft, ChevronRight, Clock, Award } from 'lucide-react';

interface RecipeListProps {
  recipes: Recipe[];
  title: string;
  onRecipeClick?: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl border-4 border-green-500 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[300px] flex-shrink-0">
      {/* Image Section */}
      <div className="relative aspect-video w-full bg-gray-200 overflow-hidden border-b-4 border-green-500">
        {recipe.imageUrl ? (
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
            <span>Image coming soon!</span>
          </div>
        )}
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center shadow-lg">
          <Star className="w-4 h-4 fill-white mr-1" />
          <span className="font-bold">{recipe.ratings.average.toFixed(1)}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3 text-gray-800 line-clamp-1">{recipe.title}</h3>
        
        <div className="space-y-3">
          {/* Cuisine */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full border-2 border-green-200">
              {recipe.cuisine}
            </span>
          </div>

          {/* Time and Difficulty */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full border-2 border-gray-200">
              <Clock className="w-4 h-4 mr-1" />
              <span>{recipe.prepTime + recipe.cookTime} mins</span>
            </div>
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full border-2 border-gray-200">
              <Award className="w-4 h-4 mr-1" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeList: React.FC<RecipeListProps> = ({ recipes, title, onRecipeClick }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // card width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Horizontal scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto w-full pb-4 -mx-8 px-8 scrollbar-hide"
        style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
        }}
        >
        <div className="flex flex-nowrap space-x-6">
            {recipes.slice(0, 15).map((recipe) => (
            <div 
                key={recipe.id}
                onClick={() => onRecipeClick?.(recipe)}
                className="cursor-pointer"
            >
                <RecipeCard recipe={recipe} />
            </div>
            ))}
        </div>
        </div>

    </div>
  );
};

export default RecipeList; 