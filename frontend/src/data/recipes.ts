export interface Recipe {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  tags: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  ratings: {
    average: number;
    count: number;
  };
  views: number;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomatoes",
    cuisine: "Italian",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "Pizza dough",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "San Marzano tomatoes",
      "Extra virgin olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat oven to 500°F (260°C)",
      "Roll out pizza dough",
      "Spread crushed tomatoes",
      "Add torn mozzarella",
      "Bake for 12-15 minutes",
      "Top with fresh basil"
    ],
    imageUrl: "https://example.com/margherita-pizza.jpg",
    tags: ["pizza", "italian", "vegetarian", "classic"],
    nutritionalInfo: {
      calories: 250,
      protein: 12,
      carbs: 30,
      fats: 8
    },
    ratings: {
      average: 4.8,
      count: 1250
    },
    views: 15000
  },
  {
    id: "2",
    title: "Chicken Tikka Masala",
    description: "Grilled chicken in a rich, creamy tomato-based curry sauce",
    cuisine: "Indian",
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      "Chicken breast",
      "Yogurt",
      "Garam masala",
      "Heavy cream",
      "Tomato sauce",
      "Onions",
      "Garlic",
      "Ginger"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices",
      "Grill chicken until charred",
      "Prepare sauce with onions, tomatoes, and cream",
      "Combine chicken and sauce",
      "Simmer until thick"
    ],
    imageUrl: "https://example.com/tikka-masala.jpg",
    tags: ["indian", "curry", "chicken", "spicy"],
    nutritionalInfo: {
      calories: 320,
      protein: 28,
      carbs: 12,
      fats: 18
    },
    ratings: {
      average: 4.9,
      count: 980
    },
    views: 12000
  },
  {
    id: "3",
    title: "Avocado Toast",
    description: "Simple and nutritious breakfast with mashed avocado on artisan bread",
    cuisine: "Modern",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "Sourdough bread",
      "Ripe avocados",
      "Cherry tomatoes",
      "Red pepper flakes",
      "Salt and pepper",
      "Olive oil"
    ],
    instructions: [
      "Toast bread until golden",
      "Mash avocado with seasonings",
      "Spread on toast",
      "Top with tomatoes and pepper flakes"
    ],
    imageUrl: "https://example.com/avocado-toast.jpg",
    tags: ["breakfast", "healthy", "vegetarian", "quick"],
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 25,
      fats: 16
    },
    ratings: {
      average: 4.5,
      count: 750
    },
    views: 9000
  },
  {
    id: "4",
    title: "Beef Bulgogi",
    description: "Korean marinated beef with sweet and savory flavors",
    cuisine: "Korean",
    prepTime: 40,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "Thinly sliced beef",
      "Soy sauce",
      "Asian pear",
      "Garlic",
      "Ginger",
      "Brown sugar",
      "Sesame oil"
    ],
    instructions: [
      "Blend marinade ingredients",
      "Marinate beef for 30 minutes",
      "Heat pan until very hot",
      "Cook beef in batches",
      "Garnish with sesame seeds"
    ],
    imageUrl: "https://example.com/bulgogi.jpg",
    tags: ["korean", "beef", "asian", "quick"],
    nutritionalInfo: {
      calories: 350,
      protein: 32,
      carbs: 15,
      fats: 16
    },
    ratings: {
      average: 4.7,
      count: 620
    },
    views: 8500
  },
  {
    id: "5",
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy grain bowl with Mediterranean toppings",
    cuisine: "Mediterranean",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "Quinoa",
      "Cherry tomatoes",
      "Cucumber",
      "Kalamata olives",
      "Feta cheese",
      "Red onion",
      "Olive oil",
      "Lemon juice"
    ],
    instructions: [
      "Cook quinoa according to package",
      "Chop vegetables",
      "Combine ingredients",
      "Dress with olive oil and lemon",
      "Season to taste"
    ],
    imageUrl: "https://example.com/quinoa-bowl.jpg",
    tags: ["healthy", "vegetarian", "meal-prep", "mediterranean"],
    nutritionalInfo: {
      calories: 310,
      protein: 12,
      carbs: 42,
      fats: 14
    },
    ratings: {
      average: 4.6,
      count: 450
    },
    views: 7200
  },
  {
    id: "6",
    title: "Classic French Croissants",
    description: "Buttery, flaky French pastries",
    cuisine: "French",
    prepTime: 120,
    cookTime: 25,
    servings: 12,
    difficulty: "Hard",
    ingredients: [
      "Bread flour",
      "Active dry yeast",
      "Sugar",
      "Salt",
      "Cold butter",
      "Milk"
    ],
    instructions: [
      "Make dough and chill",
      "Laminate with butter",
      "Fold and rest three times",
      "Shape croissants",
      "Proof and bake"
    ],
    imageUrl: "https://example.com/croissants.jpg",
    tags: ["french", "pastry", "breakfast", "baking"],
    nutritionalInfo: {
      calories: 280,
      protein: 5,
      carbs: 28,
      fats: 17
    },
    ratings: {
      average: 4.9,
      count: 320
    },
    views: 11000
  },
  {
    id: "7",
    title: "Spicy Pad Thai",
    description: "Classic Thai stir-fried rice noodles",
    cuisine: "Thai",
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "Rice noodles",
      "Tofu",
      "Bean sprouts",
      "Eggs",
      "Peanuts",
      "Tamarind paste",
      "Fish sauce",
      "Palm sugar"
    ],
    instructions: [
      "Soak noodles",
      "Make sauce",
      "Stir-fry ingredients",
      "Combine and toss",
      "Garnish and serve"
    ],
    imageUrl: "https://example.com/pad-thai.jpg",
    tags: ["thai", "noodles", "spicy", "stir-fry"],
    nutritionalInfo: {
      calories: 380,
      protein: 16,
      carbs: 52,
      fats: 12
    },
    ratings: {
      average: 4.7,
      count: 890
    },
    views: 13500
  },
  {
    id: "8",
    title: "Homemade Sushi Rolls",
    description: "Fresh and customizable sushi rolls",
    cuisine: "Japanese",
    prepTime: 45,
    cookTime: 30,
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Fresh fish",
      "Cucumber",
      "Avocado",
      "Rice vinegar",
      "Wasabi",
      "Soy sauce"
    ],
    instructions: [
      "Prepare sushi rice",
      "Cut ingredients",
      "Assemble rolls",
      "Cut and serve"
    ],
    imageUrl: "https://example.com/sushi.jpg",
    tags: ["japanese", "sushi", "seafood", "fresh"],
    nutritionalInfo: {
      calories: 290,
      protein: 12,
      carbs: 45,
      fats: 6
    },
    ratings: {
      average: 4.6,
      count: 560
    },
    views: 9800
  },
  {
    id: "9",
    title: "Classic Beef Burger",
    description: "Juicy homemade beef burger with all the fixings",
    cuisine: "American",
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "Ground beef",
      "Burger buns",
      "Lettuce",
      "Tomato",
      "Onion",
      "Cheese",
      "Mayo",
      "Ketchup"
    ],
    instructions: [
      "Form patties",
      "Season well",
      "Grill to preference",
      "Assemble burger",
      "Serve hot"
    ],
    imageUrl: "https://example.com/burger.jpg",
    tags: ["american", "beef", "grilling", "classic"],
    nutritionalInfo: {
      calories: 450,
      protein: 28,
      carbs: 35,
      fats: 22
    },
    ratings: {
      average: 4.5,
      count: 1100
    },
    views: 14500
  },
  {
    id: "10",
    title: "Vegetable Stir-Fry",
    description: "Quick and healthy vegetable stir-fry with tofu",
    cuisine: "Asian Fusion",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "Mixed vegetables",
      "Tofu",
      "Soy sauce",
      "Ginger",
      "Garlic",
      "Sesame oil",
      "Rice"
    ],
    instructions: [
      "Prep vegetables",
      "Cook rice",
      "Stir-fry vegetables",
      "Add sauce",
      "Serve hot"
    ],
    imageUrl: "https://example.com/stir-fry.jpg",
    tags: ["vegetarian", "healthy", "quick", "asian"],
    nutritionalInfo: {
      calories: 280,
      protein: 14,
      carbs: 38,
      fats: 8
    },
    ratings: {
      average: 4.4,
      count: 380
    },
    views: 6200
  },
  {
    id: "11",
    title: "Greek Moussaka",
    description: "Traditional layered eggplant and meat casserole with béchamel sauce",
    cuisine: "Greek",
    prepTime: 45,
    cookTime: 60,
    servings: 8,
    difficulty: "Hard",
    ingredients: [
      "Eggplants",
      "Ground lamb",
      "Onions",
      "Garlic",
      "Tomato paste",
      "Cinnamon",
      "Flour",
      "Milk",
      "Eggs",
      "Nutmeg"
    ],
    instructions: [
      "Slice and salt eggplants",
      "Make meat sauce",
      "Prepare béchamel",
      "Layer ingredients",
      "Bake until golden"
    ],
    imageUrl: "https://example.com/moussaka.jpg",
    tags: ["greek", "casserole", "lamb", "comfort-food"],
    nutritionalInfo: {
      calories: 420,
      protein: 24,
      carbs: 28,
      fats: 26
    },
    ratings: {
      average: 4.8,
      count: 680
    },
    views: 9200
  },
  {
    id: "12",
    title: "Vietnamese Pho",
    description: "Traditional beef noodle soup with aromatic broth",
    cuisine: "Vietnamese",
    prepTime: 30,
    cookTime: 180,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      "Rice noodles",
      "Beef bones",
      "Beef slices",
      "Star anise",
      "Cinnamon stick",
      "Ginger",
      "Bean sprouts",
      "Thai basil"
    ],
    instructions: [
      "Make bone broth",
      "Cook rice noodles",
      "Prepare garnishes",
      "Assemble bowls",
      "Serve hot"
    ],
    imageUrl: "https://example.com/pho.jpg",
    tags: ["vietnamese", "soup", "beef", "noodles"],
    nutritionalInfo: {
      calories: 320,
      protein: 26,
      carbs: 42,
      fats: 8
    },
    ratings: {
      average: 4.9,
      count: 850
    },
    views: 11500
  },
  {
    id: "13",
    title: "Spanish Paella",
    description: "Saffron-flavored rice dish with seafood and chorizo",
    cuisine: "Spanish",
    prepTime: 40,
    cookTime: 45,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      "Bomba rice",
      "Saffron",
      "Shrimp",
      "Mussels",
      "Chorizo",
      "Bell peppers",
      "Peas",
      "Chicken stock"
    ],
    instructions: [
      "Bloom saffron in stock",
      "Cook sofrito",
      "Add rice and stock",
      "Add seafood",
      "Create socarrat"
    ],
    imageUrl: "https://example.com/paella.jpg",
    tags: ["spanish", "rice", "seafood", "one-pot"],
    nutritionalInfo: {
      calories: 460,
      protein: 32,
      carbs: 48,
      fats: 18
    },
    ratings: {
      average: 4.7,
      count: 720
    },
    views: 10200
  },
  {
    id: "14",
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate dessert with molten center",
    cuisine: "French",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Eggs",
      "Sugar",
      "Flour",
      "Vanilla extract",
      "Salt"
    ],
    instructions: [
      "Melt chocolate and butter",
      "Whisk eggs and sugar",
      "Combine ingredients",
      "Bake until edges set",
      "Serve immediately"
    ],
    imageUrl: "https://example.com/lava-cake.jpg",
    tags: ["dessert", "chocolate", "french", "baking"],
    nutritionalInfo: {
      calories: 380,
      protein: 6,
      carbs: 34,
      fats: 24
    },
    ratings: {
      average: 4.9,
      count: 1400
    },
    views: 16800
  },
  {
    id: "15",
    title: "Mexican Street Tacos",
    description: "Authentic street-style tacos with carne asada",
    cuisine: "Mexican",
    prepTime: 30,
    cookTime: 15,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "Flank steak",
      "Corn tortillas",
      "Onion",
      "Cilantro",
      "Lime",
      "Mexican spices",
      "Salsa verde"
    ],
    instructions: [
      "Marinate meat",
      "Grill steak",
      "Warm tortillas",
      "Chop toppings",
      "Assemble tacos"
    ],
    imageUrl: "https://example.com/tacos.jpg",
    tags: ["mexican", "street-food", "beef", "quick"],
    nutritionalInfo: {
      calories: 280,
      protein: 24,
      carbs: 22,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 920
    },
    views: 12800
  },
  {
    id: "16",
    title: "Butternut Squash Soup",
    description: "Creamy autumn soup with roasted butternut squash",
    cuisine: "American",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "Butternut squash",
      "Onion",
      "Garlic",
      "Vegetable broth",
      "Heavy cream",
      "Sage",
      "Nutmeg"
    ],
    instructions: [
      "Roast squash",
      "Sauté aromatics",
      "Blend ingredients",
      "Add cream",
      "Season to taste"
    ],
    imageUrl: "https://example.com/squash-soup.jpg",
    tags: ["soup", "vegetarian", "fall", "comfort-food"],
    nutritionalInfo: {
      calories: 220,
      protein: 4,
      carbs: 32,
      fats: 10
    },
    ratings: {
      average: 4.6,
      count: 580
    },
    views: 8400
  },
  {
    id: "17",
    title: "Falafel Wrap",
    description: "Crispy chickpea patties with tahini sauce in pita",
    cuisine: "Middle Eastern",
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "Dried chickpeas",
      "Fresh herbs",
      "Garlic",
      "Cumin",
      "Pita bread",
      "Tahini",
      "Cucumber",
      "Tomatoes"
    ],
    instructions: [
      "Soak chickpeas",
      "Blend falafel mixture",
      "Form and fry patties",
      "Make tahini sauce",
      "Assemble wraps"
    ],
    imageUrl: "https://example.com/falafel.jpg",
    tags: ["middle-eastern", "vegetarian", "healthy", "lunch"],
    nutritionalInfo: {
      calories: 380,
      protein: 14,
      carbs: 52,
      fats: 16
    },
    ratings: {
      average: 4.7,
      count: 640
    },
    views: 9600
  },
  {
    id: "18",
    title: "Beef Wellington",
    description: "Classic British dish of beef tenderloin wrapped in puff pastry",
    cuisine: "British",
    prepTime: 60,
    cookTime: 45,
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      "Beef tenderloin",
      "Puff pastry",
      "Mushrooms",
      "Prosciutto",
      "Dijon mustard",
      "Egg wash",
      "Thyme"
    ],
    instructions: [
      "Sear beef",
      "Make mushroom duxelles",
      "Wrap in prosciutto",
      "Encase in pastry",
      "Bake until golden"
    ],
    imageUrl: "https://example.com/wellington.jpg",
    tags: ["british", "beef", "special-occasion", "elegant"],
    nutritionalInfo: {
      calories: 580,
      protein: 42,
      carbs: 28,
      fats: 34
    },
    ratings: {
      average: 4.9,
      count: 420
    },
    views: 14200
  },
  {
    id: "19",
    title: "Miso Ramen",
    description: "Hearty Japanese noodle soup with miso broth",
    cuisine: "Japanese",
    prepTime: 30,
    cookTime: 60,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "Ramen noodles",
      "Miso paste",
      "Pork belly",
      "Soft-boiled eggs",
      "Green onions",
      "Corn",
      "Bamboo shoots",
      "Nori"
    ],
    instructions: [
      "Prepare broth",
      "Cook pork belly",
      "Boil eggs",
      "Cook noodles",
      "Assemble bowls"
    ],
    imageUrl: "https://example.com/ramen.jpg",
    tags: ["japanese", "soup", "noodles", "comfort-food"],
    nutritionalInfo: {
      calories: 520,
      protein: 28,
      carbs: 58,
      fats: 22
    },
    ratings: {
      average: 4.8,
      count: 780
    },
    views: 11800
  },
  {
    id: "20",
    title: "Berry Cheesecake",
    description: "Creamy New York style cheesecake with mixed berry topping",
    cuisine: "American",
    prepTime: 30,
    cookTime: 60,
    servings: 12,
    difficulty: "Medium",
    ingredients: [
      "Cream cheese",
      "Graham crackers",
      "Sugar",
      "Eggs",
      "Sour cream",
      "Mixed berries",
      "Vanilla extract",
      "Butter"
    ],
    instructions: [
      "Make crust",
      "Prepare filling",
      "Bake in water bath",
      "Cool completely",
      "Top with berries"
    ],
    imageUrl: "https://example.com/cheesecake.jpg",
    tags: ["dessert", "baking", "cheesecake", "berries"],
    nutritionalInfo: {
      calories: 420,
      protein: 8,
      carbs: 38,
      fats: 26
    },
    ratings: {
      average: 4.9,
      count: 1100
    },
    views: 15600
  }
];

// Helper functions for recipe management
export const getPopularRecipes = () => {
  return recipes
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);
};

export const searchRecipes = (query: string) => {
  const searchTerm = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    recipe.cuisine.toLowerCase().includes(searchTerm)
  );
};

export const getRecipeById = (id: string) => {
  return recipes.find(recipe => recipe.id === id);
}; 