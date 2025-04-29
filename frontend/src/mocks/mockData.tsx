import { Recipe } from "./mockTypes";

export const mealPlan = [
    { day: 1, schedule: [{ time: "08:00 AM", recipe: "Avocado Toast" }] },
    { day: 5, schedule: [{ time: "12:00 PM", recipe: "Grilled Chicken Salad" }] },
    { day: 12, schedule: [{ time: "06:00 PM", recipe: "Pasta Primavera" }] },
    { day: 20, schedule: [{ time: "07:00 PM", recipe: "Salmon & Veggies" }] },
  ];

  
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
        { id: null, name: "Pizza dough", quantity: 1, unit: "count" },
        { id: null, name: "Fresh mozzarella", quantity: 200, unit: "grams" },
        { id: null, name: "Fresh basil leaves", quantity: 10, unit: "count" },
        { id: null, name: "San Marzano tomatoes", quantity: 200, unit: "grams" },
        { id: null, name: "Extra virgin olive oil", quantity: 2, unit: "tbsp" },
        { id: null, name: "Salt", quantity: 1, unit: "tsp" }
      ],
      instructions: [
        "Preheat oven to 500°F (260°C)",
        "Roll out pizza dough",
        "Spread crushed tomatoes",
        "Add torn mozzarella",
        "Bake for 12-15 minutes",
        "Top with fresh basil"
      ],

      //Eventually change this image url to backend, mock for now
      imageUrl: "https://imgs.search.brave.com/xwcQR81vQpr7eo9e0ZMDwDXdneWKLzdUkN_6OEMz58A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb29r/aWVhbmRrYXRlLmNv/bS9pbWFnZXMvMjAy/MS8wNy9tYXJnaGVy/aXRhLXBpenphLXJl/Y2lwZS0xLTIuanBn",
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
        { id: null, name: "Chicken breast", quantity: 500, unit: "grams" },
        { id: null, name: "Yogurt", quantity: 200, unit: "grams" },
        { id: null, name: "Garam masala", quantity: 2, unit: "tbsp" },
        { id: null, name: "Heavy cream", quantity: 100, unit: "ml" },
        { id: null, name: "Tomato sauce", quantity: 400, unit: "grams" },
        { id: null, name: "Onions", quantity: 2, unit: "count" },
        { id: null, name: "Garlic", quantity: 4, unit: "cloves" },
        { id: null, name: "Ginger", quantity: 1, unit: "tbsp" }
      ],
      instructions: [
        "Marinate chicken in yogurt and spices",
        "Grill chicken until charred",
        "Prepare sauce with onions, tomatoes, and cream",
        "Combine chicken and sauce",
        "Simmer until thick"
      ],
      imageUrl: "https://imgs.search.brave.com/lhenkq_NUddS6MTMwdpAzmeSNY07TsS30Uprv6Z9RwE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA2L2NoaWNrZW4t/dGlra2EtbWFzYWxh/LXJlY2lwZS53ZWJw",
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
        { id: null, name: "Sourdough bread", quantity: 2, unit: "slices" },
        { id: null, name: "Ripe avocados", quantity: 2, unit: "count" },
        { id: null, name: "Cherry tomatoes", quantity: 100, unit: "grams" },
        { id: null, name: "Red pepper flakes", quantity: 0.5, unit: "tsp" },
        { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
        { id: null, name: "Olive oil", quantity: 1, unit: "tbsp" }
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
{ id: null, name: "Thinly sliced beef", quantity: 500, unit: "grams" },
        { id: null, name: "Soy sauce", quantity: 100, unit: "ml" },
        { id: null, name: "Asian pear", quantity: 1, unit: "count" },
        { id: null, name: "Garlic", quantity: 4, unit: "cloves" },
        { id: null, name: "Ginger", quantity: 1, unit: "tbsp" },
        { id: null, name: "Brown sugar", quantity: 2, unit: "tbsp" },
        { id: null, name: "Sesame oil", quantity: 1, unit: "tbsp" }
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
        { id: null, name: "Quinoa", quantity: 200, unit: "grams" },
        { id: null, name: "Cherry tomatoes", quantity: 100, unit: "grams" },
        { id: null, name: "Cucumber", quantity: 1, unit: "count" },
        { id: null, name: "Kalamata olives", quantity: 50, unit: "grams" },
        { id: null, name: "Feta cheese", quantity: 100, unit: "grams" },
        { id: null, name: "Red onion", quantity: 0.5, unit: "count" },
        { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" },
        { id: null, name: "Lemon juice", quantity: 1, unit: "tbsp" }
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
      average: 4.7,
      count: 610
    },
    views: 8100
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
      { id: null, name: "Bread flour", quantity: 500, unit: "grams" },
      { id: null, name: "Active dry yeast", quantity: 7, unit: "grams" },
      { id: null, name: "Sugar", quantity: 50, unit: "grams" },
      { id: null, name: "Salt", quantity: 10, unit: "grams" },
      { id: null, name: "Cold butter", quantity: 250, unit: "grams" },
      { id: null, name: "Milk", quantity: 250, unit: "ml" }
    ],
    instructions: [
      "Make dough and chill",
      "Laminate with butter",
      "Fold and rest three times",
      "Shape croissants",
      "Proof and bake"
    ],
    imageUrl: "https://imgs.search.brave.com/hNL3DH6RKTu6eYf5vDDQ4ZNFotPyOka2kfXql_xSg4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzU5LzMyLzE2/LzM2MF9GXzU5MzIx/NjY2X0xwUExVNHBF/dld0SHZuV080THh0/VUJtWjdGbTljaDlv/LmpwZw",
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
      { id: null, name: "Rice noodles", quantity: 200, unit: "grams" },
      { id: null, name: "Tofu", quantity: 150, unit: "grams" },
      { id: null, name: "Bean sprouts", quantity: 100, unit: "grams" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Peanuts", quantity: 50, unit: "grams" },
      { id: null, name: "Tamarind paste", quantity: 2, unit: "tbsp" },
      { id: null, name: "Fish sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Palm sugar", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Soak noodles",
      "Make sauce",
      "Stir-fry ingredients",
      "Combine and toss",
      "Garnish and serve"
    ],
    imageUrl: "https://imgs.search.brave.com/k2AeFSykB6aYAuPKnp6S4HlOrHA88UDtnTkegMdxEo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYXRobGV0/ZWx1bmNoYm94LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMi9EU0NGNTEx/Ni0xLmpwZz9yZXNp/emU9NjgzLDEwMjQm/c3NsPTE",
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
      { id: null, name: "Sushi rice", quantity: 300, unit: "grams" },
      { id: null, name: "Nori sheets", quantity: 6, unit: "count" },
      { id: null, name: "Fresh fish", quantity: 200, unit: "grams" },
      { id: null, name: "Cucumber", quantity: 1, unit: "count" },
      { id: null, name: "Avocado", quantity: 1, unit: "count" },
      { id: null, name: "Rice vinegar", quantity: 2, unit: "tbsp" },
      { id: null, name: "Wasabi", quantity: 1, unit: "tsp" },
      { id: null, name: "Soy sauce", quantity: 50, unit: "ml" }
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
      { id: null, name: "Ground beef", quantity: 500, unit: "grams" },
      { id: null, name: "Burger buns", quantity: 4, unit: "count" },
      { id: null, name: "Lettuce", quantity: 4, unit: "leaves" },
      { id: null, name: "Tomato", quantity: 1, unit: "count" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Cheese", quantity: 4, unit: "slices" },
      { id: null, name: "Mayo", quantity: 2, unit: "tbsp" },
      { id: null, name: "Ketchup", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Form patties",
      "Season well",
      "Grill to preference",
      "Assemble burger",
      "Serve hot"
    ],
    imageUrl: "https://imgs.search.brave.com/-kykFc1PB2jgbg-SyEiBsde6xZekzEpACMWj7COZReM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWFs/Zm9vZC50ZXNjby5j/b20vbWVkaWEvaW1h/Z2VzL0J1cmdlci0z/MUxHSC1hMjk2YTM1/Ni0wMjBjLTQ5Njkt/ODZlOC1kOGMyNjEz/OWY4M2YtMC0xNDAw/eDkxOS5qcGc",
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
      { id: null, name: "Mixed vegetables", quantity: 300, unit: "grams" },
      { id: null, name: "Tofu", quantity: 200, unit: "grams" },
      { id: null, name: "Soy sauce", quantity: 3, unit: "tbsp" },
      { id: null, name: "Ginger", quantity: 1, unit: "tbsp" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Sesame oil", quantity: 1, unit: "tbsp" },
      { id: null, name: "Rice", quantity: 200, unit: "grams" }
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
      { id: null, name: "Eggplants", quantity: 2, unit: "count" },
      { id: null, name: "Ground lamb", quantity: 500, unit: "grams" },
      { id: null, name: "Onions", quantity: 2, unit: "count" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Tomato paste", quantity: 3, unit: "tbsp" },
      { id: null, name: "Cinnamon", quantity: 1, unit: "tsp" },
      { id: null, name: "Flour", quantity: 50, unit: "grams" },
      { id: null, name: "Milk", quantity: 500, unit: "ml" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Nutmeg", quantity: 0.5, unit: "tsp" }
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
      { id: null, name: "Rice noodles", quantity: 200, unit: "grams" },
      { id: null, name: "Beef bones", quantity: 1, unit: "kg" },
      { id: null, name: "Beef slices", quantity: 300, unit: "grams" },
      { id: null, name: "Star anise", quantity: 2, unit: "count" },
      { id: null, name: "Cinnamon stick", quantity: 1, unit: "count" },
      { id: null, name: "Ginger", quantity: 50, unit: "grams" },
      { id: null, name: "Bean sprouts", quantity: 150, unit: "grams" },
      { id: null, name: "Thai basil", quantity: 10, unit: "leaves" }
    ],
    instructions: [
      "Make bone broth",
      "Cook rice noodles",
      "Prepare garnishes",
      "Assemble bowls",
      "Serve hot"
    ],
    imageUrl: "https://imgs.search.brave.com/6Io7YDH3j16cZT2hnBiX4HX_GVi3kUU68Uvh5ArNTyE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/MjM1MjM1MS9waG90/by9waG8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVRhTmVV/Y1F5YXp1Ym9MMmc2/c0NfRU16dUY5WnZX/OXhQdkRMNkZaZ1dL/Vk09",
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
      { id: null, name: "Bomba rice", quantity: 300, unit: "grams" },
      { id: null, name: "Saffron", quantity: 1, unit: "pinch" },
      { id: null, name: "Shrimp", quantity: 200, unit: "grams" },
      { id: null, name: "Mussels", quantity: 200, unit: "grams" },
      { id: null, name: "Chorizo", quantity: 150, unit: "grams" },
      { id: null, name: "Bell peppers", quantity: 2, unit: "count" },
      { id: null, name: "Peas", quantity: 100, unit: "grams" },
      { id: null, name: "Chicken stock", quantity: 1, unit: "liter" }
    ],
    instructions: [
      "Bloom saffron in stock",
      "Cook sofrito",
      "Add rice and stock",
      "Add seafood",
      "Create socarrat"
    ],
    imageUrl: "https://imgs.search.brave.com/wRDYWs56Qyi-nxb0hLcn3fEaJ2hyA_cwybZZXMHh5CY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgx/ODkxNDAyL3Bob3Rv/L3NlYWZvb2QtcGFl/bGxhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz04WlVCc25j/ZE1zU0FLT20teFRJ/eUhUNko1cElJc2tl/TXN3MHZLNjRLeUtR/PQ",
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
      { id: null, name: "Dark chocolate", quantity: 200, unit: "grams" },
      { id: null, name: "Butter", quantity: 100, unit: "grams" },
      { id: null, name: "Eggs", quantity: 3, unit: "count" },
      { id: null, name: "Sugar", quantity: 100, unit: "grams" },
      { id: null, name: "Flour", quantity: 50, unit: "grams" },
      { id: null, name: "Vanilla extract", quantity: 1, unit: "tsp" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Melt chocolate and butter",
      "Whisk eggs and sugar",
      "Combine ingredients",
      "Bake until edges set",
      "Serve immediately"
    ],
    imageUrl: "https://imgs.search.brave.com/X2OUMnMc5aNkgWYj_P-CAt4jGdqmcmUTEX7P_70_WYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzg4Lzk1LzU4/LzM2MF9GXzEyODg5/NTU4ODlfanpraUlw/bzNpbENqWk12QkFD/QUtQT25LRzQ3Ulk4/SHYuanBn",
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
      { id: null, name: "Flank steak", quantity: 500, unit: "grams" },
      { id: null, name: "Corn tortillas", quantity: 12, unit: "count" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Cilantro", quantity: 50, unit: "grams" },
      { id: null, name: "Lime", quantity: 2, unit: "count" },
      { id: null, name: "Mexican spices", quantity: 2, unit: "tbsp" },
      { id: null, name: "Salsa verde", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Marinate meat",
      "Grill steak",
      "Warm tortillas",
      "Chop toppings",
      "Assemble tacos"
    ],
    imageUrl: "https://imgs.search.brave.com/778GL1XlICCwv1rRIhCU0ZR50-wafRb1_ul3ovbrYws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nbGVu/ZGFlbWJyZWUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA4L01leGljYW4t/U3RyZWV0LVRhY29z/LTMtaG9sZGVyLXYt/Yi02ODN4MTAyNC5q/cGc",
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
      { id: null, name: "Butternut squash", quantity: 1, unit: "count" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Vegetable broth", quantity: 1, unit: "liter" },
      { id: null, name: "Heavy cream", quantity: 100, unit: "ml" },
      { id: null, name: "Sage", quantity: 1, unit: "tbsp" },
      { id: null, name: "Nutmeg", quantity: 0.5, unit: "tsp" }
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
      { id: null, name: "Dried chickpeas", quantity: 200, unit: "grams" },
      { id: null, name: "Fresh herbs", quantity: 50, unit: "grams" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Cumin", quantity: 1, unit: "tbsp" },
      { id: null, name: "Pita bread", quantity: 4, unit: "count" },
      { id: null, name: "Tahini", quantity: 50, unit: "grams" },
      { id: null, name: "Cucumber", quantity: 1, unit: "count" },
      { id: null, name: "Tomatoes", quantity: 2, unit: "count" }
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
      { id: null, name: "Beef tenderloin", quantity: 1, unit: "kg" },
      { id: null, name: "Puff pastry", quantity: 500, unit: "grams" },
      { id: null, name: "Mushrooms", quantity: 200, unit: "grams" },
      { id: null, name: "Prosciutto", quantity: 100, unit: "grams" },
      { id: null, name: "Dijon mustard", quantity: 2, unit: "tbsp" },
      { id: null, name: "Egg wash", quantity: 1, unit: "count" },
      { id: null, name: "Thyme", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Sear beef",
      "Make mushroom duxelles",
      "Wrap in prosciutto",
      "Encase in pastry",
      "Bake until golden"
    ],
    imageUrl: "https://imgs.search.brave.com/5ItdXxS4-T_mPpVQ8ug3_2cCP7ZaphyHejaLDxJrjSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzYxLzMwLzA2/LzM2MF9GXzEyNjEz/MDA2MDhfOU5uU1hr/TXlQdzN4YmNHdkZQ/T0l3ZkFWZHZhaFd0/T3IuanBn",
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
      { id: null, name: "Ramen noodles", quantity: 200, unit: "grams" },
      { id: null, name: "Miso paste", quantity: 3, unit: "tbsp" },
      { id: null, name: "Pork belly", quantity: 300, unit: "grams" },
      { id: null, name: "Soft-boiled eggs", quantity: 2, unit: "count" },
      { id: null, name: "Green onions", quantity: 50, unit: "grams" },
      { id: null, name: "Corn", quantity: 100, unit: "grams" },
      { id: null, name: "Bamboo shoots", quantity: 50, unit: "grams" },
      { id: null, name: "Nori", quantity: 2, unit: "sheets" }
    ],
    instructions: [
      "Prepare broth",
      "Cook pork belly",
      "Boil eggs",
      "Cook noodles",
      "Assemble bowls"
    ],
    imageUrl: "https://imgs.search.brave.com/dbvo2GDSx-uMU7BonEJ7j7ja-gn5ATqZ7cDXTpiNp6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMC8wOC9taXNv/LXJhbWVuLTUxNGUy/Y2EuanBnP3F1YWxp/dHk9OTAmcmVzaXpl/PTQ0MCw0MDA",
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
      { id: null, name: "Cream cheese", quantity: 500, unit: "grams" },
      { id: null, name: "Graham crackers", quantity: 200, unit: "grams" },
      { id: null, name: "Sugar", quantity: 150, unit: "grams" },
      { id: null, name: "Eggs", quantity: 3, unit: "count" },
      { id: null, name: "Sour cream", quantity: 200, unit: "grams" },
      { id: null, name: "Mixed berries", quantity: 300, unit: "grams" },
      { id: null, name: "Vanilla extract", quantity: 1, unit: "tsp" },
      { id: null, name: "Butter", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Make crust",
      "Prepare filling",
      "Bake in water bath",
      "Cool completely",
      "Top with berries"
    ],
    imageUrl: "https://imgs.search.brave.com/DoRkwui_gxwPx0mptLMEuLJHxeRjWe92scgrJddt2wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2lhbGxvemFmZmVy/YW5vLmNvbS9pbWFn/ZXMvMjU1LTI1NTMw/L1dpbGQtYmVycnkt/Y2hlZXNlY2FrZV8x/MjAweDgwMC5qcGc",
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
  },
  {
    id: "21",
    title: "Lemon Herb Grilled Salmon",
    description: "Fresh salmon fillets grilled with a zesty lemon herb marinade",
    cuisine: "American",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Salmon fillets", quantity: 4, unit: "count" },
      { id: null, name: "Lemon juice", quantity: 3, unit: "tbsp" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Fresh dill", quantity: 1, unit: "tbsp" },
      { id: null, name: "Salt", quantity: 1, unit: "tsp" },
      { id: null, name: "Black pepper", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Prepare marinade with lemon juice, olive oil, garlic, and herbs",
      "Marinate salmon for 15 minutes",
      "Preheat grill to medium-high heat",
      "Grill salmon for 4-5 minutes per side",
      "Serve with lemon wedges"
    ],
    imageUrl: '',
    tags: ["salmon", "grilling", "healthy", "quick"],
    nutritionalInfo: {
      calories: 320,
      protein: 34,
      carbs: 2,
      fats: 20
    },
    ratings: {
      average: 4.8,
      count: 540
    },
    views: 8900
  },
  {
    id: "22",
    title: "Vegetarian Lasagna",
    description: "Layered pasta with rich tomato sauce, vegetables, and cheese",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 60,
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Lasagna noodles", quantity: 12, unit: "count" },
      { id: null, name: "Ricotta cheese", quantity: 400, unit: "grams" },
      { id: null, name: "Mozzarella cheese", quantity: 300, unit: "grams" },
      { id: null, name: "Parmesan cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Tomato sauce", quantity: 800, unit: "grams" },
      { id: null, name: "Zucchini", quantity: 2, unit: "count" },
      { id: null, name: "Spinach", quantity: 200, unit: "grams" }
    ],
    instructions: [
      "Cook lasagna noodles",
      "Prepare vegetable filling",
      "Layer noodles, sauce, vegetables, and cheese",
      "Bake at 375°F (190°C) for 45 minutes",
      "Let rest for 10 minutes before serving"
    ],
    imageUrl: '',
    tags: ["vegetarian", "lasagna", "italian", "comfort-food"],
    nutritionalInfo: {
      calories: 420,
      protein: 22,
      carbs: 45,
      fats: 18
    },
    ratings: {
      average: 4.7,
      count: 670
    },
    views: 10200
  },
  {
    id: "23",
    title: "Shrimp Tacos",
    description: "Spicy shrimp tacos with fresh toppings and creamy sauce",
    cuisine: "Mexican",
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Shrimp", quantity: 400, unit: "grams" },
      { id: null, name: "Corn tortillas", quantity: 8, unit: "count" },
      { id: null, name: "Cabbage", quantity: 100, unit: "grams" },
      { id: null, name: "Lime", quantity: 2, unit: "count" },
      { id: null, name: "Chili powder", quantity: 1, unit: "tbsp" },
      { id: null, name: "Garlic powder", quantity: 1, unit: "tsp" },
      { id: null, name: "Sour cream", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Season shrimp with spices",
      "Cook shrimp in a skillet for 3-4 minutes",
      "Warm tortillas",
      "Assemble tacos with shrimp, cabbage, and sauce",
      "Serve with lime wedges"
    ],
    imageUrl: '',
    tags: ["mexican", "shrimp", "tacos", "quick"],
    nutritionalInfo: {
      calories: 280,
      protein: 20,
      carbs: 25,
      fats: 10
    },
    ratings: {
      average: 4.9,
      count: 720
    },
    views: 11500
  },
  {
    id: "24",
    title: "Stuffed Bell Peppers",
    description: "Bell peppers filled with a savory mixture of rice, beans, and spices",
    cuisine: "Mediterranean",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Bell peppers", quantity: 4, unit: "count" },
      { id: null, name: "Cooked rice", quantity: 200, unit: "grams" },
      { id: null, name: "Black beans", quantity: 150, unit: "grams" },
      { id: null, name: "Tomato sauce", quantity: 200, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Cheddar cheese", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Cut tops off bell peppers and remove seeds",
      "Prepare filling with rice, beans, and spices",
      "Stuff peppers with filling",
      "Bake at 375°F (190°C) for 30 minutes",
      "Top with cheese and bake for 10 more minutes"
    ],
    imageUrl: '',
    tags: ["vegetarian", "stuffed-peppers", "healthy", "mediterranean"],
    nutritionalInfo: {
      calories: 350,
      protein: 14,
      carbs: 50,
      fats: 10
    },
    ratings: {
      average: 4.6,
      count: 580
    },
    views: 9200
  },
  {
    id: "25",
    title: "Chicken Alfredo Pasta",
    description: "Creamy pasta with grilled chicken and rich Alfredo sauce",
    cuisine: "Italian",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Fettuccine pasta", quantity: 300, unit: "grams" },
      { id: null, name: "Chicken breast", quantity: 400, unit: "grams" },
      { id: null, name: "Heavy cream", quantity: 200, unit: "ml" },
      { id: null, name: "Parmesan cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Parsley", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Grill chicken and slice into strips",
      "Prepare Alfredo sauce with butter, cream, and cheese",
      "Combine pasta, chicken, and sauce",
      "Garnish with parsley and serve"
    ],
    imageUrl: '',
    tags: ["italian", "pasta", "chicken", "creamy"],
    nutritionalInfo: {
      calories: 520,
      protein: 32,
      carbs: 45,
      fats: 22
    },
    ratings: {
      average: 4.8,
      count: 860
    },
    views: 13200
  },
  {
    id: "26",
    title: "Eggplant Parmesan",
    description: "Crispy breaded eggplant layered with marinara sauce and melted cheese",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Eggplants", quantity: 2, unit: "count" },
      { id: null, name: "Breadcrumbs", quantity: 200, unit: "grams" },
      { id: null, name: "Parmesan cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Mozzarella cheese", quantity: 200, unit: "grams" },
      { id: null, name: "Marinara sauce", quantity: 500, unit: "ml" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Flour", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Slice and salt eggplants",
      "Bread eggplant slices with flour, egg, and breadcrumbs",
      "Fry until golden",
      "Layer eggplant, marinara, and cheese in a baking dish",
      "Bake at 375°F (190°C) for 25 minutes"
    ],
    imageUrl: "",
    tags: ["italian", "vegetarian", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 400,
      protein: 18,
      carbs: 35,
      fats: 20
    },
    ratings: {
      average: 4.7,
      count: 680
    },
    views: 9200
  },
  {
    id: "27",
    title: "Chicken Shawarma",
    description: "Middle Eastern spiced chicken served with pita and garlic sauce",
    cuisine: "Middle Eastern",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Chicken thighs", quantity: 500, unit: "grams" },
      { id: null, name: "Pita bread", quantity: 4, unit: "count" },
      { id: null, name: "Yogurt", quantity: 100, unit: "grams" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Lemon juice", quantity: 2, unit: "tbsp" },
      { id: null, name: "Shawarma spices", quantity: 2, unit: "tbsp" },
      { id: null, name: "Cucumber", quantity: 1, unit: "count" },
      { id: null, name: "Tomatoes", quantity: 2, unit: "count" }
    ],
    instructions: [
      "Marinate chicken in yogurt, spices, and lemon juice",
      "Grill chicken until cooked through",
      "Slice chicken and prepare toppings",
      "Warm pita bread",
      "Assemble shawarma wraps"
    ],
    imageUrl: "",
    tags: ["middle-eastern", "chicken", "quick", "healthy"],
    nutritionalInfo: {
      calories: 350,
      protein: 28,
      carbs: 30,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 10500
  },
  {
    id: "28",
    title: "Vegetable Curry",
    description: "A hearty and flavorful curry with mixed vegetables and coconut milk",
    cuisine: "Indian",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Mixed vegetables", quantity: 400, unit: "grams" },
      { id: null, name: "Coconut milk", quantity: 400, unit: "ml" },
      { id: null, name: "Curry powder", quantity: 2, unit: "tbsp" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Ginger", quantity: 1, unit: "tbsp" },
      { id: null, name: "Tomato paste", quantity: 2, unit: "tbsp" },
      { id: null, name: "Vegetable broth", quantity: 200, unit: "ml" }
    ],
    instructions: [
      "Sauté onion, garlic, and ginger",
      "Add curry powder and tomato paste",
      "Stir in vegetables and broth",
      "Simmer until vegetables are tender",
      "Add coconut milk and season to taste"
    ],
    imageUrl: "",
    tags: ["indian", "vegetarian", "curry", "healthy"],
    nutritionalInfo: {
      calories: 280,
      protein: 6,
      carbs: 30,
      fats: 16
    },
    ratings: {
      average: 4.6,
      count: 580
    },
    views: 8700
  },
  {
    id: "29",
    title: "Beef Stroganoff",
    description: "Creamy beef and mushroom dish served over egg noodles",
    cuisine: "Russian",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Beef strips", quantity: 500, unit: "grams" },
      { id: null, name: "Mushrooms", quantity: 200, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Sour cream", quantity: 200, unit: "grams" },
      { id: null, name: "Beef broth", quantity: 200, unit: "ml" },
      { id: null, name: "Flour", quantity: 2, unit: "tbsp" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Egg noodles", quantity: 300, unit: "grams" }
    ],
    instructions: [
      "Cook egg noodles according to package instructions",
      "Sear beef strips and set aside",
      "Sauté onions and mushrooms in butter",
      "Add flour and broth to make a sauce",
      "Stir in sour cream and return beef to the pan"
    ],
    imageUrl: "",
    tags: ["russian", "beef", "comfort-food", "creamy"],
    nutritionalInfo: {
      calories: 450,
      protein: 28,
      carbs: 40,
      fats: 18
    },
    ratings: {
      average: 4.7,
      count: 640
    },
    views: 9800
  },
  {
    id: "30",
    title: "Blueberry Pancakes",
    description: "Fluffy pancakes loaded with fresh blueberries",
    cuisine: "American",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "All-purpose flour", quantity: 200, unit: "grams" },
      { id: null, name: "Milk", quantity: 250, unit: "ml" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Sugar", quantity: 2, unit: "tbsp" },
      { id: null, name: "Baking powder", quantity: 2, unit: "tsp" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Blueberries", quantity: 150, unit: "grams" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" }
    ],
    instructions: [
      "Mix dry ingredients in a bowl",
      "Whisk wet ingredients and combine with dry ingredients",
      "Fold in blueberries",
      "Cook pancakes on a hot griddle",
      "Serve with syrup and butter"
    ],
    imageUrl: "",
    tags: ["breakfast", "pancakes", "blueberries", "quick"],
    nutritionalInfo: {
      calories: 320,
      protein: 8,
      carbs: 50,
      fats: 10
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "26",
    title: "Eggplant Parmesan",
    description: "Crispy breaded eggplant layered with marinara sauce and melted cheese",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Eggplants", quantity: 2, unit: "count" },
      { id: null, name: "Breadcrumbs", quantity: 200, unit: "grams" },
      { id: null, name: "Parmesan cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Mozzarella cheese", quantity: 200, unit: "grams" },
      { id: null, name: "Marinara sauce", quantity: 500, unit: "ml" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Flour", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Slice and salt eggplants",
      "Bread eggplant slices with flour, egg, and breadcrumbs",
      "Fry until golden",
      "Layer eggplant, marinara, and cheese in a baking dish",
      "Bake at 375°F (190°C) for 25 minutes"
    ],
    imageUrl: "",
    tags: ["italian", "vegetarian", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 400,
      protein: 18,
      carbs: 35,
      fats: 20
    },
    ratings: {
      average: 4.7,
      count: 680
    },
    views: 9200
  },
  {
    id: "27",
    title: "Chicken Shawarma",
    description: "Middle Eastern spiced chicken served with pita and garlic sauce",
    cuisine: "Middle Eastern",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Chicken thighs", quantity: 500, unit: "grams" },
      { id: null, name: "Pita bread", quantity: 4, unit: "count" },
      { id: null, name: "Yogurt", quantity: 100, unit: "grams" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Lemon juice", quantity: 2, unit: "tbsp" },
      { id: null, name: "Shawarma spices", quantity: 2, unit: "tbsp" },
      { id: null, name: "Cucumber", quantity: 1, unit: "count" },
      { id: null, name: "Tomatoes", quantity: 2, unit: "count" }
    ],
    instructions: [
      "Marinate chicken in yogurt, spices, and lemon juice",
      "Grill chicken until cooked through",
      "Slice chicken and prepare toppings",
      "Warm pita bread",
      "Assemble shawarma wraps"
    ],
    imageUrl: "",
    tags: ["middle-eastern", "chicken", "quick", "healthy"],
    nutritionalInfo: {
      calories: 350,
      protein: 28,
      carbs: 30,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 10500
  },
  {
    id: "28",
    title: "Vegetable Curry",
    description: "A hearty and flavorful curry with mixed vegetables and coconut milk",
    cuisine: "Indian",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Mixed vegetables", quantity: 400, unit: "grams" },
      { id: null, name: "Coconut milk", quantity: 400, unit: "ml" },
      { id: null, name: "Curry powder", quantity: 2, unit: "tbsp" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Ginger", quantity: 1, unit: "tbsp" },
      { id: null, name: "Tomato paste", quantity: 2, unit: "tbsp" },
      { id: null, name: "Vegetable broth", quantity: 200, unit: "ml" }
    ],
    instructions: [
      "Sauté onion, garlic, and ginger",
      "Add curry powder and tomato paste",
      "Stir in vegetables and broth",
      "Simmer until vegetables are tender",
      "Add coconut milk and season to taste"
    ],
    imageUrl: "",
    tags: ["indian", "vegetarian", "curry", "healthy"],
    nutritionalInfo: {
      calories: 280,
      protein: 6,
      carbs: 30,
      fats: 16
    },
    ratings: {
      average: 4.6,
      count: 580
    },
    views: 8700
  },
  {
    id: "29",
    title: "Beef Stroganoff",
    description: "Creamy beef and mushroom dish served over egg noodles",
    cuisine: "Russian",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Beef strips", quantity: 500, unit: "grams" },
      { id: null, name: "Mushrooms", quantity: 200, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Sour cream", quantity: 200, unit: "grams" },
      { id: null, name: "Beef broth", quantity: 200, unit: "ml" },
      { id: null, name: "Flour", quantity: 2, unit: "tbsp" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Egg noodles", quantity: 300, unit: "grams" }
    ],
    instructions: [
      "Cook egg noodles according to package instructions",
      "Sear beef strips and set aside",
      "Sauté onions and mushrooms in butter",
      "Add flour and broth to make a sauce",
      "Stir in sour cream and return beef to the pan"
    ],
    imageUrl: "",
    tags: ["russian", "beef", "comfort-food", "creamy"],
    nutritionalInfo: {
      calories: 450,
      protein: 28,
      carbs: 40,
      fats: 18
    },
    ratings: {
      average: 4.7,
      count: 640
    },
    views: 9800
  },
  {
    id: "30",
    title: "Blueberry Pancakes",
    description: "Fluffy pancakes loaded with fresh blueberries",
    cuisine: "American",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "All-purpose flour", quantity: 200, unit: "grams" },
      { id: null, name: "Milk", quantity: 250, unit: "ml" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Sugar", quantity: 2, unit: "tbsp" },
      { id: null, name: "Baking powder", quantity: 2, unit: "tsp" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Blueberries", quantity: 150, unit: "grams" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" }
    ],
    instructions: [
      "Mix dry ingredients in a bowl",
      "Whisk wet ingredients and combine with dry ingredients",
      "Fold in blueberries",
      "Cook pancakes on a hot griddle",
      "Serve with syrup and butter"
    ],
    imageUrl: "",
    tags: ["breakfast", "pancakes", "blueberries", "quick"],
    nutritionalInfo: {
      calories: 320,
      protein: 8,
      carbs: 50,
      fats: 10
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  }, 
  {
    id: "31",
    title: "Stuffed Zucchini Boats",
    description: "Zucchini halves stuffed with a savory mixture of ground turkey, vegetables, and cheese",
    cuisine: "Mediterranean",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Zucchini", quantity: 4, unit: "count" },
      { id: null, name: "Ground turkey", quantity: 300, unit: "grams" },
      { id: null, name: "Tomato sauce", quantity: 200, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Mozzarella cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Olive oil", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Cut zucchini in half and scoop out the center",
      "Sauté onion, garlic, and turkey in olive oil",
      "Mix in tomato sauce and season to taste",
      "Fill zucchini halves with the mixture",
      "Top with cheese and bake at 375°F (190°C) for 25 minutes"
    ],
    imageUrl: "",
    tags: ["mediterranean", "healthy", "zucchini", "baking"],
    nutritionalInfo: {
      calories: 280,
      protein: 22,
      carbs: 10,
      fats: 16
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "32",
    title: "Lentil Soup",
    description: "Hearty and nutritious soup made with lentils, vegetables, and spices",
    cuisine: "Middle Eastern",
    prepTime: 15,
    cookTime: 40,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Lentils", quantity: 200, unit: "grams" },
      { id: null, name: "Carrots", quantity: 2, unit: "count" },
      { id: null, name: "Celery", quantity: 2, unit: "stalks" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Vegetable broth", quantity: 1, unit: "liter" },
      { id: null, name: "Cumin", quantity: 1, unit: "tsp" },
      { id: null, name: "Olive oil", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Sauté onion, garlic, carrots, and celery in olive oil",
      "Add lentils, broth, and spices",
      "Simmer for 30 minutes until lentils are tender",
      "Blend partially for a creamy texture",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["soup", "lentils", "vegetarian", "healthy"],
    nutritionalInfo: {
      calories: 220,
      protein: 12,
      carbs: 30,
      fats: 6
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "33",
    title: "Caprese Salad",
    description: "A simple and refreshing salad with tomatoes, mozzarella, and basil",
    cuisine: "Italian",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Tomatoes", quantity: 3, unit: "count" },
      { id: null, name: "Fresh mozzarella", quantity: 200, unit: "grams" },
      { id: null, name: "Fresh basil leaves", quantity: 10, unit: "count" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" },
      { id: null, name: "Balsamic glaze", quantity: 1, unit: "tbsp" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Black pepper", quantity: 0.25, unit: "tsp" }
    ],
    instructions: [
      "Slice tomatoes and mozzarella",
      "Layer tomatoes, mozzarella, and basil on a plate",
      "Drizzle with olive oil and balsamic glaze",
      "Season with salt and pepper",
      "Serve immediately"
    ],
    imageUrl: "",
    tags: ["salad", "italian", "vegetarian", "quick"],
    nutritionalInfo: {
      calories: 180,
      protein: 8,
      carbs: 6,
      fats: 14
    },
    ratings: {
      average: 4.9,
      count: 720
    },
    views: 11200
  },
  {
    id: "34",
    title: "Shepherd's Pie",
    description: "Classic British comfort food with a savory meat filling and mashed potato topping",
    cuisine: "British",
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Ground lamb", quantity: 500, unit: "grams" },
      { id: null, name: "Potatoes", quantity: 800, unit: "grams" },
      { id: null, name: "Carrots", quantity: 2, unit: "count" },
      { id: null, name: "Peas", quantity: 100, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Milk", quantity: 100, unit: "ml" },
      { id: null, name: "Beef broth", quantity: 200, unit: "ml" }
    ],
    instructions: [
      "Boil and mash potatoes with butter and milk",
      "Sauté onion, carrots, and lamb",
      "Add peas and broth, simmer until thickened",
      "Layer meat mixture and mashed potatoes in a baking dish",
      "Bake at 375°F (190°C) for 25 minutes"
    ],
    imageUrl: "",
    tags: ["british", "comfort-food", "lamb", "baking"],
    nutritionalInfo: {
      calories: 450,
      protein: 20,
      carbs: 40,
      fats: 22
    },
    ratings: {
      average: 4.8,
      count: 860
    },
    views: 13200
  },
  {
    id: "35",
    title: "Chicken Caesar Wrap",
    description: "Grilled chicken, romaine lettuce, and Caesar dressing wrapped in a tortilla",
    cuisine: "American",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Chicken breast", quantity: 400, unit: "grams" },
      { id: null, name: "Romaine lettuce", quantity: 200, unit: "grams" },
      { id: null, name: "Caesar dressing", quantity: 100, unit: "ml" },
      { id: null, name: "Parmesan cheese", quantity: 50, unit: "grams" },
      { id: null, name: "Tortillas", quantity: 4, unit: "count" },
      { id: null, name: "Croutons", quantity: 50, unit: "grams" }
    ],
    instructions: [
      "Grill chicken and slice into strips",
      "Toss lettuce with Caesar dressing and croutons",
      "Place chicken and salad mixture on a tortilla",
      "Sprinkle with Parmesan and wrap tightly",
      "Serve immediately"
    ],
    imageUrl: "",
    tags: ["wrap", "chicken", "quick", "healthy"],
    nutritionalInfo: {
      calories: 320,
      protein: 25,
      carbs: 20,
      fats: 14
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "36",
    title: "Vegetable Stir-Fry with Peanut Sauce",
    description: "Colorful vegetables stir-fried and tossed in a creamy peanut sauce",
    cuisine: "Asian",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Mixed vegetables", quantity: 300, unit: "grams" },
      { id: null, name: "Peanut butter", quantity: 50, unit: "grams" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Ginger", quantity: 1, unit: "tbsp" },
      { id: null, name: "Sesame oil", quantity: 1, unit: "tbsp" },
      { id: null, name: "Lime juice", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Sauté garlic and ginger in sesame oil",
      "Add vegetables and stir-fry until tender",
      "Mix peanut butter, soy sauce, and lime juice to make the sauce",
      "Toss vegetables in the sauce",
      "Serve hot with rice or noodles"
    ],
    imageUrl: "",
    tags: ["asian", "vegetarian", "stir-fry", "quick"],
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 20,
      fats: 16
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "37",
    title: "Beet and Goat Cheese Salad",
    description: "Earthy roasted beets paired with creamy goat cheese and arugula",
    cuisine: "Modern",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Beets", quantity: 4, unit: "count" },
      { id: null, name: "Goat cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Arugula", quantity: 100, unit: "grams" },
      { id: null, name: "Walnuts", quantity: 50, unit: "grams" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" },
      { id: null, name: "Balsamic vinegar", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Roast beets until tender and slice",
      "Toss arugula with olive oil and balsamic vinegar",
      "Top with beets, goat cheese, and walnuts",
      "Serve immediately"
    ],
    imageUrl: "",
    tags: ["salad", "beets", "vegetarian", "healthy"],
    nutritionalInfo: {
      calories: 220,
      protein: 6,
      carbs: 18,
      fats: 14
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "38",
    title: "Pumpkin Risotto",
    description: "Creamy risotto made with pumpkin puree and Parmesan cheese",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Arborio rice", quantity: 300, unit: "grams" },
      { id: null, name: "Pumpkin puree", quantity: 200, unit: "grams" },
      { id: null, name: "Chicken broth", quantity: 1, unit: "liter" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Parmesan cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" }
    ],
    instructions: [
      "Sauté onion and garlic in butter",
      "Add rice and toast for 2 minutes",
      "Gradually add broth while stirring",
      "Stir in pumpkin puree and Parmesan",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["italian", "risotto", "pumpkin", "comfort-food"],
    nutritionalInfo: {
      calories: 320,
      protein: 10,
      carbs: 50,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "39",
    title: "Teriyaki Salmon Bowl",
    description: "Grilled salmon served over rice with teriyaki sauce and vegetables",
    cuisine: "Japanese",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Salmon fillets", quantity: 4, unit: "count" },
      { id: null, name: "Teriyaki sauce", quantity: 100, unit: "ml" },
      { id: null, name: "Cooked rice", quantity: 400, unit: "grams" },
      { id: null, name: "Broccoli", quantity: 200, unit: "grams" },
      { id: null, name: "Carrots", quantity: 2, unit: "count" },
      { id: null, name: "Sesame seeds", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Grill salmon and brush with teriyaki sauce",
      "Steam broccoli and carrots",
      "Serve salmon over rice with vegetables",
      "Sprinkle with sesame seeds and extra sauce"
    ],
    imageUrl: "",
    tags: ["japanese", "salmon", "healthy", "quick"],
    nutritionalInfo: {
      calories: 380,
      protein: 28,
      carbs: 30,
      fats: 14
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "40",
    title: "Chocolate Chip Banana Muffins",
    description: "Moist banana muffins loaded with chocolate chips",
    cuisine: "American",
    prepTime: 15,
    cookTime: 20,
    servings: 12,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Ripe bananas", quantity: 3, unit: "count" },
      { id: null, name: "All-purpose flour", quantity: 250, unit: "grams" },
      { id: null, name: "Sugar", quantity: 150, unit: "grams" },
      { id: null, name: "Butter", quantity: 100, unit: "grams" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Baking soda", quantity: 1, unit: "tsp" },
      { id: null, name: "Chocolate chips", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Mash bananas and mix with melted butter",
      "Add sugar, eggs, and vanilla, mix well",
      "Combine dry ingredients and fold into the wet mixture",
      "Stir in chocolate chips",
      "Scoop batter into muffin tins and bake at 350°F (175°C) for 20 minutes"
    ],
    imageUrl: "",
    tags: ["dessert", "banana", "muffins", "baking"],
    nutritionalInfo: {
      calories: 220,
      protein: 4,
      carbs: 35,
      fats: 8
    },
    ratings: {
      average: 4.9,
      count: 960
    },
    views: 14200
  },
  {
    id: "41",
    title: "Spinach Artichoke Dip",
    description: "Creamy and cheesy dip with spinach and artichokes, perfect for parties",
    cuisine: "American",
    prepTime: 10,
    cookTime: 20,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Spinach", quantity: 200, unit: "grams" },
      { id: null, name: "Artichoke hearts", quantity: 200, unit: "grams" },
      { id: null, name: "Cream cheese", quantity: 200, unit: "grams" },
      { id: null, name: "Sour cream", quantity: 100, unit: "grams" },
      { id: null, name: "Parmesan cheese", quantity: 50, unit: "grams" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" }
    ],
    instructions: [
      "Sauté garlic in a pan",
      "Mix all ingredients in a bowl",
      "Bake at 375°F (190°C) for 20 minutes",
      "Serve warm with chips or bread"
    ],
    imageUrl: "",
    tags: ["appetizer", "dip", "cheesy", "party"],
    nutritionalInfo: {
      calories: 250,
      protein: 8,
      carbs: 10,
      fats: 20
    },
    ratings: {
      average: 4.8,
      count: 540
    },
    views: 8900
  },
  {
    id: "42",
    title: "Stuffed Mushrooms",
    description: "Bite-sized mushrooms stuffed with a savory cheese and herb filling",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Button mushrooms", quantity: 300, unit: "grams" },
      { id: null, name: "Cream cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Parmesan cheese", quantity: 50, unit: "grams" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Parsley", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Remove mushroom stems and chop finely",
      "Mix stems with cheese, garlic, and parsley",
      "Stuff mushroom caps with the mixture",
      "Bake at 375°F (190°C) for 20 minutes"
    ],
    imageUrl: "",
    tags: ["appetizer", "mushrooms", "cheesy", "baking"],
    nutritionalInfo: {
      calories: 180,
      protein: 6,
      carbs: 8,
      fats: 14
    },
    ratings: {
      average: 4.7,
      count: 480
    },
    views: 7600
  },
  {
    id: "43",
    title: "Sweet Potato Fries",
    description: "Crispy baked sweet potato fries with a hint of paprika",
    cuisine: "American",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Sweet potatoes", quantity: 500, unit: "grams" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" },
      { id: null, name: "Paprika", quantity: 1, unit: "tsp" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Black pepper", quantity: 0.25, unit: "tsp" }
    ],
    instructions: [
      "Cut sweet potatoes into fries",
      "Toss with olive oil and seasonings",
      "Bake at 400°F (200°C) for 25 minutes, flipping halfway",
      "Serve hot"
    ],
    imageUrl: "",
    tags: ["side", "healthy", "baking", "quick"],
    nutritionalInfo: {
      calories: 150,
      protein: 2,
      carbs: 30,
      fats: 5
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 9800
  },
  {
    id: "44",
    title: "Chicken Enchiladas",
    description: "Soft tortillas filled with shredded chicken and topped with enchilada sauce",
    cuisine: "Mexican",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Tortillas", quantity: 8, unit: "count" },
      { id: null, name: "Shredded chicken", quantity: 400, unit: "grams" },
      { id: null, name: "Enchilada sauce", quantity: 300, unit: "ml" },
      { id: null, name: "Cheddar cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" }
    ],
    instructions: [
      "Fill tortillas with chicken and onion",
      "Roll and place in a baking dish",
      "Top with enchilada sauce and cheese",
      "Bake at 375°F (190°C) for 30 minutes"
    ],
    imageUrl: "",
    tags: ["mexican", "chicken", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 350,
      protein: 25,
      carbs: 30,
      fats: 12
    },
    ratings: {
      average: 4.7,
      count: 720
    },
    views: 11200
  },
  {
    id: "45",
    title: "Vegetable Spring Rolls",
    description: "Fresh and crunchy spring rolls with a tangy dipping sauce",
    cuisine: "Asian",
    prepTime: 20,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Rice paper wrappers", quantity: 8, unit: "count" },
      { id: null, name: "Carrots", quantity: 2, unit: "count" },
      { id: null, name: "Cucumber", quantity: 1, unit: "count" },
      { id: null, name: "Lettuce", quantity: 100, unit: "grams" },
      { id: null, name: "Mint leaves", quantity: 10, unit: "count" }
    ],
    instructions: [
      "Julienne carrots and cucumber",
      "Soak rice paper wrappers in water",
      "Fill with vegetables and roll tightly",
      "Serve with dipping sauce"
    ],
    imageUrl: "",
    tags: ["asian", "vegetarian", "healthy", "quick"],
    nutritionalInfo: {
      calories: 120,
      protein: 2,
      carbs: 25,
      fats: 1
    },
    ratings: {
      average: 4.6,
      count: 580
    },
    views: 8700
  },
  {
    id: "46",
    title: "Garlic Knots",
    description: "Soft and buttery garlic knots made from pizza dough",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 20,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Pizza dough", quantity: 500, unit: "grams" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Parsley", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Roll dough into small knots",
      "Bake at 375°F (190°C) for 15 minutes",
      "Brush with garlic butter and parsley",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["bread", "garlic", "baking", "side"],
    nutritionalInfo: {
      calories: 200,
      protein: 5,
      carbs: 30,
      fats: 6
    },
    ratings: {
      average: 4.8,
      count: 640
    },
    views: 10200
  },
  {
    id: "47",
    title: "Greek Salad",
    description: "Classic Greek salad with feta cheese, olives, and a tangy dressing",
    cuisine: "Greek",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Tomatoes", quantity: 3, unit: "count" },
      { id: null, name: "Cucumber", quantity: 1, unit: "count" },
      { id: null, name: "Red onion", quantity: 1, unit: "count" },
      { id: null, name: "Feta cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Kalamata olives", quantity: 50, unit: "grams" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" },
      { id: null, name: "Red wine vinegar", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Chop vegetables and combine in a bowl",
      "Add feta and olives",
      "Drizzle with olive oil and vinegar",
      "Toss and serve"
    ],
    imageUrl: "",
    tags: ["salad", "greek", "vegetarian", "healthy"],
    nutritionalInfo: {
      calories: 180,
      protein: 6,
      carbs: 8,
      fats: 14
    },
    ratings: {
      average: 4.9,
      count: 720
    },
    views: 11200
  },
  {
    id: "48",
    title: "Chocolate Mousse",
    description: "Rich and creamy chocolate mousse with a hint of vanilla",
    cuisine: "French",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Dark chocolate", quantity: 200, unit: "grams" },
      { id: null, name: "Heavy cream", quantity: 200, unit: "ml" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Sugar", quantity: 50, unit: "grams" },
      { id: null, name: "Vanilla extract", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Melt chocolate and let cool",
      "Whip cream until stiff peaks form",
      "Fold cream into chocolate mixture",
      "Chill for 2 hours before serving"
    ],
    imageUrl: "",
    tags: ["dessert", "chocolate", "french", "creamy"],
    nutritionalInfo: {
      calories: 320,
      protein: 6,
      carbs: 20,
      fats: 26
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "49",
    title: "Egg Salad Sandwich",
    description: "Classic egg salad served between slices of soft bread",
    cuisine: "American",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Eggs", quantity: 6, unit: "count" },
      { id: null, name: "Mayonnaise", quantity: 100, unit: "grams" },
      { id: null, name: "Mustard", quantity: 1, unit: "tsp" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Black pepper", quantity: 0.25, unit: "tsp" },
      { id: null, name: "Bread slices", quantity: 8, unit: "count" }
    ],
    instructions: [
      "Boil and peel eggs",
      "Mash eggs and mix with mayonnaise, mustard, salt, and pepper",
      "Spread mixture on bread slices",
      "Assemble sandwiches and serve"
    ],
    imageUrl: "",
    tags: ["sandwich", "eggs", "quick", "lunch"],
    nutritionalInfo: {
      calories: 300,
      protein: 12,
      carbs: 28,
      fats: 16
    },
    ratings: {
      average: 4.6,
      count: 580
    },
    views: 8700
  },
  {
    id: "50",
    title: "Peach Cobbler",
    description: "Warm and comforting peach cobbler with a buttery crust",
    cuisine: "American",
    prepTime: 15,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Peaches", quantity: 500, unit: "grams" },
      { id: null, name: "Sugar", quantity: 150, unit: "grams" },
      { id: null, name: "Flour", quantity: 200, unit: "grams" },
      { id: null, name: "Butter", quantity: 100, unit: "grams" },
      { id: null, name: "Baking powder", quantity: 1, unit: "tsp" },
      { id: null, name: "Milk", quantity: 100, unit: "ml" }
    ],
    instructions: [
      "Slice peaches and mix with sugar",
      "Prepare batter with flour, baking powder, butter, and milk",
      "Layer peaches and batter in a baking dish",
      "Bake at 375°F (190°C) for 40 minutes"
    ],
    imageUrl: "",
    tags: ["dessert", "peach", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 280,
      protein: 4,
      carbs: 40,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "51",
    title: "Vegetable Paella",
    description: "A vegetarian take on the classic Spanish rice dish with saffron and fresh vegetables",
    cuisine: "Spanish",
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Bomba rice", quantity: 300, unit: "grams" },
      { id: null, name: "Saffron", quantity: 1, unit: "pinch" },
      { id: null, name: "Bell peppers", quantity: 2, unit: "count" },
      { id: null, name: "Green beans", quantity: 150, unit: "grams" },
      { id: null, name: "Tomatoes", quantity: 2, unit: "count" },
      { id: null, name: "Vegetable broth", quantity: 1, unit: "liter" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Heat olive oil in a large pan",
      "Sauté vegetables until tender",
      "Add rice and saffron, stir to coat",
      "Pour in broth and simmer until rice is cooked",
      "Let rest for 5 minutes before serving"
    ],
    imageUrl: "",
    tags: ["spanish", "vegetarian", "rice", "one-pot"],
    nutritionalInfo: {
      calories: 320,
      protein: 8,
      carbs: 60,
      fats: 6
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 9200
  },
  {
    id: "52",
    title: "Thai Green Curry",
    description: "A fragrant and spicy green curry with coconut milk and fresh vegetables",
    cuisine: "Thai",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Green curry paste", quantity: 2, unit: "tbsp" },
      { id: null, name: "Coconut milk", quantity: 400, unit: "ml" },
      { id: null, name: "Mixed vegetables", quantity: 300, unit: "grams" },
      { id: null, name: "Tofu", quantity: 200, unit: "grams" },
      { id: null, name: "Basil leaves", quantity: 10, unit: "count" },
      { id: null, name: "Lime", quantity: 1, unit: "count" }
    ],
    instructions: [
      "Sauté curry paste in a pan",
      "Add coconut milk and bring to a simmer",
      "Add vegetables and tofu, cook until tender",
      "Garnish with basil and lime juice",
      "Serve with steamed rice"
    ],
    imageUrl: "",
    tags: ["thai", "curry", "vegetarian", "spicy"],
    nutritionalInfo: {
      calories: 280,
      protein: 10,
      carbs: 20,
      fats: 18
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "53",
    title: "BBQ Pulled Pork Sandwich",
    description: "Slow-cooked pulled pork served on a bun with tangy BBQ sauce",
    cuisine: "American",
    prepTime: 15,
    cookTime: 480,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Pork shoulder", quantity: 1, unit: "kg" },
      { id: null, name: "BBQ sauce", quantity: 200, unit: "ml" },
      { id: null, name: "Burger buns", quantity: 6, unit: "count" },
      { id: null, name: "Coleslaw", quantity: 200, unit: "grams" }
    ],
    instructions: [
      "Season pork and slow-cook for 8 hours",
      "Shred pork and mix with BBQ sauce",
      "Toast buns and assemble sandwiches with pork and coleslaw",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["american", "bbq", "pork", "sandwich"],
    nutritionalInfo: {
      calories: 450,
      protein: 28,
      carbs: 40,
      fats: 18
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "54",
    title: "Ratatouille",
    description: "A classic French vegetable stew with zucchini, eggplant, and tomatoes",
    cuisine: "French",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Zucchini", quantity: 2, unit: "count" },
      { id: null, name: "Eggplant", quantity: 1, unit: "count" },
      { id: null, name: "Tomatoes", quantity: 3, unit: "count" },
      { id: null, name: "Bell peppers", quantity: 2, unit: "count" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Sauté onion and garlic in olive oil",
      "Add chopped vegetables and cook until tender",
      "Simmer with tomatoes until flavors meld",
      "Serve warm as a side or main dish"
    ],
    imageUrl: "",
    tags: ["french", "vegetarian", "stew", "healthy"],
    nutritionalInfo: {
      calories: 180,
      protein: 4,
      carbs: 20,
      fats: 8
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "55",
    title: "Shrimp Scampi",
    description: "Garlic butter shrimp served over linguine pasta",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Shrimp", quantity: 400, unit: "grams" },
      { id: null, name: "Linguine", quantity: 300, unit: "grams" },
      { id: null, name: "Garlic", quantity: 4, unit: "cloves" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Lemon juice", quantity: 2, unit: "tbsp" },
      { id: null, name: "Parsley", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Cook linguine according to package instructions",
      "Sauté garlic in butter, add shrimp and cook until pink",
      "Toss shrimp with pasta, lemon juice, and parsley",
      "Serve immediately"
    ],
    imageUrl: "",
    tags: ["italian", "shrimp", "pasta", "quick"],
    nutritionalInfo: {
      calories: 380,
      protein: 28,
      carbs: 45,
      fats: 12
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "56",
    title: "Stuffed Cabbage Rolls",
    description: "Cabbage leaves stuffed with a savory mixture of beef and rice",
    cuisine: "Eastern European",
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Cabbage leaves", quantity: 12, unit: "count" },
      { id: null, name: "Ground beef", quantity: 500, unit: "grams" },
      { id: null, name: "Cooked rice", quantity: 200, unit: "grams" },
      { id: null, name: "Tomato sauce", quantity: 400, unit: "ml" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" }
    ],
    instructions: [
      "Blanch cabbage leaves until pliable",
      "Mix beef, rice, onion, and garlic for the filling",
      "Roll filling in cabbage leaves and place in a baking dish",
      "Cover with tomato sauce and bake at 375°F (190°C) for 1 hour"
    ],
    imageUrl: "",
    tags: ["eastern-european", "beef", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 320,
      protein: 20,
      carbs: 30,
      fats: 12
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "57",
    title: "Chicken Piccata",
    description: "Pan-seared chicken in a tangy lemon and caper sauce",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Chicken breast", quantity: 400, unit: "grams" },
      { id: null, name: "Flour", quantity: 50, unit: "grams" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Lemon juice", quantity: 3, unit: "tbsp" },
      { id: null, name: "Capers", quantity: 2, unit: "tbsp" },
      { id: null, name: "Chicken broth", quantity: 200, unit: "ml" }
    ],
    instructions: [
      "Dredge chicken in flour and pan-sear in butter",
      "Deglaze pan with chicken broth and lemon juice",
      "Add capers and simmer until sauce thickens",
      "Serve chicken with sauce drizzled on top"
    ],
    imageUrl: "",
    tags: ["italian", "chicken", "quick", "healthy"],
    nutritionalInfo: {
      calories: 280,
      protein: 25,
      carbs: 10,
      fats: 14
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "58",
    title: "Vegetable Frittata",
    description: "A fluffy egg-based dish loaded with fresh vegetables and cheese",
    cuisine: "Italian",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Eggs", quantity: 6, unit: "count" },
      { id: null, name: "Milk", quantity: 100, unit: "ml" },
      { id: null, name: "Mixed vegetables", quantity: 200, unit: "grams" },
      { id: null, name: "Cheddar cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Olive oil", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Whisk eggs and milk together",
      "Sauté vegetables in olive oil",
      "Pour egg mixture over vegetables and cook until set",
      "Sprinkle cheese on top and broil until golden"
    ],
    imageUrl: "",
    tags: ["italian", "eggs", "vegetarian", "quick"],
    nutritionalInfo: {
      calories: 250,
      protein: 14,
      carbs: 8,
      fats: 18
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "59",
    title: "Beef and Broccoli Stir-Fry",
    description: "A quick and flavorful stir-fry with tender beef and crisp broccoli",
    cuisine: "Asian",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Beef strips", quantity: 400, unit: "grams" },
      { id: null, name: "Broccoli florets", quantity: 300, unit: "grams" },
      { id: null, name: "Soy sauce", quantity: 3, unit: "tbsp" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Ginger", quantity: 1, unit: "tbsp" },
      { id: null, name: "Cornstarch", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Marinate beef in soy sauce and cornstarch",
      "Stir-fry beef until browned, set aside",
      "Stir-fry broccoli until tender-crisp",
      "Combine beef and broccoli, toss with sauce",
      "Serve hot with rice"
    ],
    imageUrl: "",
    tags: ["asian", "beef", "stir-fry", "quick"],
    nutritionalInfo: {
      calories: 320,
      protein: 28,
      carbs: 12,
      fats: 16
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "60",
    title: "Apple Crumble",
    description: "A warm dessert with tender apples and a buttery crumble topping",
    cuisine: "American",
    prepTime: 15,
    cookTime: 30,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Apples", quantity: 500, unit: "grams" },
      { id: null, name: "Sugar", quantity: 100, unit: "grams" },
      { id: null, name: "Flour", quantity: 150, unit: "grams" },
      { id: null, name: "Butter", quantity: 100, unit: "grams" },
      { id: null, name: "Cinnamon", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Slice apples and mix with sugar and cinnamon",
      "Prepare crumble topping with flour, butter, and sugar",
      "Layer apples and crumble in a baking dish",
      "Bake at 375°F (190°C) for 30 minutes"
    ],
    imageUrl: "",
    tags: ["dessert", "apple", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 280,
      protein: 3,
      carbs: 40,
      fats: 12
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "61",
    title: "Chicken Parmesan",
    description: "Crispy breaded chicken topped with marinara sauce and melted mozzarella",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Chicken breasts", quantity: 4, unit: "count" },
      { id: null, name: "Breadcrumbs", quantity: 200, unit: "grams" },
      { id: null, name: "Parmesan cheese", quantity: 50, unit: "grams" },
      { id: null, name: "Mozzarella cheese", quantity: 200, unit: "grams" },
      { id: null, name: "Marinara sauce", quantity: 400, unit: "ml" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Flour", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Pound chicken breasts to even thickness",
      "Bread chicken with flour, egg, and breadcrumbs",
      "Fry until golden and crispy",
      "Top with marinara and mozzarella",
      "Bake at 375°F (190°C) for 15 minutes"
    ],
    imageUrl: "",
    tags: ["italian", "chicken", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 450,
      protein: 35,
      carbs: 20,
      fats: 22
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 9800
  },
  {
    id: "62",
    title: "Vegetable Samosas",
    description: "Crispy pastry pockets filled with spiced potatoes and peas",
    cuisine: "Indian",
    prepTime: 40,
    cookTime: 20,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Potatoes", quantity: 300, unit: "grams" },
      { id: null, name: "Peas", quantity: 100, unit: "grams" },
      { id: null, name: "Cumin", quantity: 1, unit: "tsp" },
      { id: null, name: "Coriander", quantity: 1, unit: "tsp" },
      { id: null, name: "Pastry sheets", quantity: 6, unit: "count" },
      { id: null, name: "Oil", quantity: 500, unit: "ml" }
    ],
    instructions: [
      "Boil and mash potatoes",
      "Mix with peas and spices",
      "Fill pastry sheets and fold into triangles",
      "Deep fry until golden",
      "Serve with chutney"
    ],
    imageUrl: "",
    tags: ["indian", "vegetarian", "snack", "spicy"],
    nutritionalInfo: {
      calories: 250,
      protein: 5,
      carbs: 30,
      fats: 12
    },
    ratings: {
      average: 4.7,
      count: 640
    },
    views: 8700
  },
  {
    id: "63",
    title: "Clam Chowder",
    description: "Creamy New England-style soup with clams and potatoes",
    cuisine: "American",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Clams", quantity: 500, unit: "grams" },
      { id: null, name: "Potatoes", quantity: 300, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Heavy cream", quantity: 200, unit: "ml" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Flour", quantity: 2, unit: "tbsp" },
      { id: null, name: "Celery", quantity: 2, unit: "stalks" }
    ],
    instructions: [
      "Sauté onion and celery in butter",
      "Add flour to make a roux",
      "Stir in potatoes and broth, simmer until tender",
      "Add clams and cream, cook until heated through",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["soup", "seafood", "creamy", "comfort-food"],
    nutritionalInfo: {
      calories: 320,
      protein: 12,
      carbs: 25,
      fats: 18
    },
    ratings: {
      average: 4.8,
      count: 580
    },
    views: 9200
  },
  {
    id: "64",
    title: "Stuffed Portobello Mushrooms",
    description: "Large mushrooms filled with spinach, cheese, and breadcrumbs",
    cuisine: "Italian",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Portobello mushrooms", quantity: 4, unit: "count" },
      { id: null, name: "Spinach", quantity: 200, unit: "grams" },
      { id: null, name: "Breadcrumbs", quantity: 100, unit: "grams" },
      { id: null, name: "Parmesan cheese", quantity: 50, unit: "grams" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Remove mushroom stems and chop finely",
      "Sauté spinach and garlic in olive oil",
      "Mix spinach with breadcrumbs and cheese",
      "Stuff mushrooms and bake at 375°F (190°C) for 20 minutes",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["vegetarian", "mushrooms", "baking", "healthy"],
    nutritionalInfo: {
      calories: 200,
      protein: 8,
      carbs: 15,
      fats: 10
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "65",
    title: "Beef Tacos",
    description: "Classic Mexican tacos with seasoned ground beef and fresh toppings",
    cuisine: "Mexican",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Ground beef", quantity: 400, unit: "grams" },
      { id: null, name: "Taco shells", quantity: 8, unit: "count" },
      { id: null, name: "Lettuce", quantity: 100, unit: "grams" },
      { id: null, name: "Tomatoes", quantity: 2, unit: "count" },
      { id: null, name: "Cheddar cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Taco seasoning", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Cook ground beef with taco seasoning",
      "Warm taco shells",
      "Assemble tacos with beef, lettuce, tomatoes, and cheese",
      "Serve immediately"
    ],
    imageUrl: "",
    tags: ["mexican", "beef", "quick", "tacos"],
    nutritionalInfo: {
      calories: 300,
      protein: 20,
      carbs: 25,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 10200
  },
  {
    id: "66",
    title: "Egg Drop Soup",
    description: "Simple and comforting Chinese soup with silky egg ribbons",
    cuisine: "Chinese",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Chicken broth", quantity: 1, unit: "liter" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Cornstarch", quantity: 1, unit: "tbsp" },
      { id: null, name: "Green onions", quantity: 2, unit: "stalks" },
      { id: null, name: "Soy sauce", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Bring chicken broth to a boil",
      "Mix cornstarch with water and add to broth",
      "Whisk eggs and drizzle into the broth while stirring",
      "Garnish with green onions and soy sauce",
      "Serve hot"
    ],
    imageUrl: "",
    tags: ["chinese", "soup", "quick", "comfort-food"],
    nutritionalInfo: {
      calories: 120,
      protein: 8,
      carbs: 5,
      fats: 6
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8700
  },
  {
    id: "67",
    title: "Spinach and Feta Pie",
    description: "Greek-inspired pie with spinach, feta, and flaky phyllo dough",
    cuisine: "Greek",
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Phyllo dough", quantity: 250, unit: "grams" },
      { id: null, name: "Spinach", quantity: 300, unit: "grams" },
      { id: null, name: "Feta cheese", quantity: 200, unit: "grams" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" },
      { id: null, name: "Onion", quantity: 1, unit: "count" }
    ],
    instructions: [
      "Sauté onion and spinach in olive oil",
      "Mix spinach with feta and eggs",
      "Layer phyllo dough and filling in a baking dish",
      "Bake at 375°F (190°C) for 40 minutes",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["greek", "vegetarian", "baking", "comfort-food"],
    nutritionalInfo: {
      calories: 320,
      protein: 10,
      carbs: 25,
      fats: 18
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "68",
    title: "Chicken Fried Rice",
    description: "Quick and flavorful fried rice with chicken and vegetables",
    cuisine: "Chinese",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Cooked rice", quantity: 400, unit: "grams" },
      { id: null, name: "Chicken breast", quantity: 200, unit: "grams" },
      { id: null, name: "Mixed vegetables", quantity: 200, unit: "grams" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Sesame oil", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Cook chicken and set aside",
      "Scramble eggs and mix with rice",
      "Stir-fry vegetables and combine with rice and chicken",
      "Add soy sauce and sesame oil",
      "Serve hot"
    ],
    imageUrl: "",
    tags: ["chinese", "rice", "quick", "chicken"],
    nutritionalInfo: {
      calories: 320,
      protein: 18,
      carbs: 40,
      fats: 10
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "69",
    title: "Chocolate Fondue",
    description: "Rich melted chocolate served with fruits and marshmallows for dipping",
    cuisine: "Swiss",
    prepTime: 10,
    cookTime: 5,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Dark chocolate", quantity: 200, unit: "grams" },
      { id: null, name: "Heavy cream", quantity: 100, unit: "ml" },
      { id: null, name: "Strawberries", quantity: 200, unit: "grams" },
      { id: null, name: "Bananas", quantity: 2, unit: "count" },
      { id: null, name: "Marshmallows", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Melt chocolate with cream in a double boiler",
      "Transfer to a fondue pot",
      "Serve with fruits and marshmallows for dipping"
    ],
    imageUrl: "",
    tags: ["dessert", "chocolate", "quick", "party"],
    nutritionalInfo: {
      calories: 300,
      protein: 4,
      carbs: 30,
      fats: 18
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "70",
    title: "Vegetable Minestrone",
    description: "Hearty Italian soup with vegetables, beans, and pasta",
    cuisine: "Italian",
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Mixed vegetables", quantity: 300, unit: "grams" },
      { id: null, name: "Cannellini beans", quantity: 200, unit: "grams" },
      { id: null, name: "Pasta", quantity: 100, unit: "grams" },
      { id: null, name: "Tomato paste", quantity: 2, unit: "tbsp" },
      { id: null, name: "Vegetable broth", quantity: 1, unit: "liter" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Sauté vegetables in olive oil",
      "Add tomato paste and broth, simmer for 20 minutes",
      "Stir in beans and pasta, cook until tender",
      "Serve warm with grated Parmesan"
    ],
    imageUrl: "",
    tags: ["italian", "soup", "vegetarian", "healthy"],
    nutritionalInfo: {
      calories: 250,
      protein: 8,
      carbs: 35,
      fats: 8
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "71",
    title: "Lamb Kofta",
    description: "Middle Eastern spiced lamb skewers served with tzatziki sauce",
    cuisine: "Middle Eastern",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Ground lamb", quantity: 500, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Parsley", quantity: 2, unit: "tbsp" },
      { id: null, name: "Cumin", quantity: 1, unit: "tsp" },
      { id: null, name: "Coriander", quantity: 1, unit: "tsp" },
      { id: null, name: "Salt", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Mix lamb with spices, onion, garlic, and parsley",
      "Shape into skewers",
      "Grill until cooked through",
      "Serve with tzatziki sauce"
    ],
    imageUrl: "",
    tags: ["middle-eastern", "lamb", "grilling", "spicy"],
    nutritionalInfo: {
      calories: 320,
      protein: 25,
      carbs: 5,
      fats: 22
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "72",
    title: "Mango Sticky Rice",
    description: "Thai dessert with sweet sticky rice and fresh mango slices",
    cuisine: "Thai",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Sticky rice", quantity: 200, unit: "grams" },
      { id: null, name: "Coconut milk", quantity: 200, unit: "ml" },
      { id: null, name: "Sugar", quantity: 50, unit: "grams" },
      { id: null, name: "Salt", quantity: 0.5, unit: "tsp" },
      { id: null, name: "Mango", quantity: 2, unit: "count" }
    ],
    instructions: [
      "Cook sticky rice",
      "Heat coconut milk with sugar and salt",
      "Mix coconut milk with rice",
      "Serve with sliced mango"
    ],
    imageUrl: "",
    tags: ["thai", "dessert", "mango", "sweet"],
    nutritionalInfo: {
      calories: 280,
      protein: 4,
      carbs: 50,
      fats: 8
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "73",
    title: "Shakshuka",
    description: "Poached eggs in a spicy tomato and bell pepper sauce",
    cuisine: "Middle Eastern",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Eggs", quantity: 4, unit: "count" },
      { id: null, name: "Tomatoes", quantity: 400, unit: "grams" },
      { id: null, name: "Bell peppers", quantity: 2, unit: "count" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Cumin", quantity: 1, unit: "tsp" },
      { id: null, name: "Paprika", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Sauté onion, garlic, and bell peppers",
      "Add tomatoes and spices, simmer until thickened",
      "Make wells in the sauce and crack eggs into them",
      "Cover and cook until eggs are set",
      "Serve with bread"
    ],
    imageUrl: "",
    tags: ["middle-eastern", "eggs", "vegetarian", "spicy"],
    nutritionalInfo: {
      calories: 200,
      protein: 10,
      carbs: 15,
      fats: 10
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "74",
    title: "Fish Tacos",
    description: "Crispy fish tacos with fresh toppings and a zesty lime crema",
    cuisine: "Mexican",
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "White fish fillets", quantity: 400, unit: "grams" },
      { id: null, name: "Corn tortillas", quantity: 8, unit: "count" },
      { id: null, name: "Cabbage", quantity: 100, unit: "grams" },
      { id: null, name: "Lime", quantity: 2, unit: "count" },
      { id: null, name: "Sour cream", quantity: 100, unit: "grams" },
      { id: null, name: "Chili powder", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Season fish with chili powder and lime juice",
      "Pan-fry fish until crispy",
      "Warm tortillas",
      "Assemble tacos with fish, cabbage, and lime crema",
      "Serve immediately"
    ],
    imageUrl: "",
    tags: ["mexican", "fish", "tacos", "quick"],
    nutritionalInfo: {
      calories: 280,
      protein: 20,
      carbs: 25,
      fats: 10
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "75",
    title: "Pumpkin Pie",
    description: "Classic spiced pumpkin pie with a flaky crust",
    cuisine: "American",
    prepTime: 20,
    cookTime: 50,
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Pumpkin puree", quantity: 400, unit: "grams" },
      { id: null, name: "Pie crust", quantity: 1, unit: "count" },
      { id: null, name: "Sugar", quantity: 150, unit: "grams" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Heavy cream", quantity: 200, unit: "ml" },
      { id: null, name: "Cinnamon", quantity: 1, unit: "tsp" },
      { id: null, name: "Nutmeg", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Mix pumpkin puree, sugar, eggs, cream, and spices",
      "Pour filling into pie crust",
      "Bake for 50 minutes until set",
      "Cool before serving"
    ],
    imageUrl: "",
    tags: ["dessert", "pumpkin", "baking", "fall"],
    nutritionalInfo: {
      calories: 320,
      protein: 6,
      carbs: 40,
      fats: 14
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "76",
    title: "Vegetable Pad Thai",
    description: "A vegetarian version of the classic Thai noodle dish",
    cuisine: "Thai",
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Rice noodles", quantity: 200, unit: "grams" },
      { id: null, name: "Tofu", quantity: 150, unit: "grams" },
      { id: null, name: "Bean sprouts", quantity: 100, unit: "grams" },
      { id: null, name: "Peanuts", quantity: 50, unit: "grams" },
      { id: null, name: "Tamarind paste", quantity: 2, unit: "tbsp" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Palm sugar", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Soak noodles",
      "Make sauce with tamarind, soy sauce, and sugar",
      "Stir-fry tofu and vegetables",
      "Add noodles and sauce, toss to combine",
      "Garnish with peanuts and serve"
    ],
    imageUrl: "",
    tags: ["thai", "vegetarian", "noodles", "quick"],
    nutritionalInfo: {
      calories: 380,
      protein: 12,
      carbs: 50,
      fats: 10
    },
    ratings: {
      average: 4.7,
      count: 640
    },
    views: 9800
  },
  {
    id: "77",
    title: "French Onion Soup",
    description: "Rich and savory soup topped with melted cheese and croutons",
    cuisine: "French",
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Onions", quantity: 4, unit: "count" },
      { id: null, name: "Beef broth", quantity: 1, unit: "liter" },
      { id: null, name: "Butter", quantity: 50, unit: "grams" },
      { id: null, name: "Flour", quantity: 1, unit: "tbsp" },
      { id: null, name: "Gruyere cheese", quantity: 100, unit: "grams" },
      { id: null, name: "Baguette slices", quantity: 8, unit: "count" }
    ],
    instructions: [
      "Caramelize onions in butter",
      "Add flour and broth, simmer for 30 minutes",
      "Ladle soup into bowls, top with baguette and cheese",
      "Broil until cheese is melted",
      "Serve hot"
    ],
    imageUrl: "",
    tags: ["french", "soup", "cheesy", "comfort-food"],
    nutritionalInfo: {
      calories: 320,
      protein: 10,
      carbs: 30,
      fats: 16
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "78",
    title: "Vegetable Gyoza",
    description: "Japanese dumplings filled with a savory vegetable mixture",
    cuisine: "Japanese",
    prepTime: 30,
    cookTime: 10,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Gyoza wrappers", quantity: 24, unit: "count" },
      { id: null, name: "Cabbage", quantity: 200, unit: "grams" },
      { id: null, name: "Carrots", quantity: 2, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Sesame oil", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Chop vegetables and mix with soy sauce and sesame oil",
      "Fill gyoza wrappers and seal edges",
      "Pan-fry until golden, then steam until cooked through",
      "Serve with dipping sauce"
    ],
    imageUrl: "",
    tags: ["japanese", "dumplings", "vegetarian", "snack"],
    nutritionalInfo: {
      calories: 200,
      protein: 6,
      carbs: 30,
      fats: 6
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "79",
    title: "Coconut Shrimp",
    description: "Crispy shrimp coated in coconut flakes and served with a sweet chili sauce",
    cuisine: "Caribbean",
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Shrimp", quantity: 400, unit: "grams" },
      { id: null, name: "Flour", quantity: 100, unit: "grams" },
      { id: null, name: "Eggs", quantity: 2, unit: "count" },
      { id: null, name: "Coconut flakes", quantity: 100, unit: "grams" },
      { id: null, name: "Breadcrumbs", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Coat shrimp in flour, egg, and coconut mixture",
      "Deep fry until golden",
      "Serve with sweet chili sauce"
    ],
    imageUrl: "",
    tags: ["caribbean", "shrimp", "crispy", "appetizer"],
    nutritionalInfo: {
      calories: 320,
      protein: 20,
      carbs: 25,
      fats: 15
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "80",
    title: "Raspberry Sorbet",
    description: "Refreshing and tangy raspberry sorbet made with fresh berries",
    cuisine: "French",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Raspberries", quantity: 300, unit: "grams" },
      { id: null, name: "Sugar", quantity: 100, unit: "grams" },
      { id: null, name: "Water", quantity: 100, unit: "ml" },
      { id: null, name: "Lemon juice", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Blend raspberries, sugar, water, and lemon juice",
      "Strain to remove seeds",
      "Freeze mixture in an ice cream maker",
      "Serve chilled"
    ],
    imageUrl: "",
    tags: ["dessert", "raspberry", "sorbet", "summer"],
    nutritionalInfo: {
      calories: 120,
      protein: 1,
      carbs: 30,
      fats: 0
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },

  {
    id: "81",
    title: "Vegetable Pho",
    description: "A vegetarian version of the classic Vietnamese noodle soup",
    cuisine: "Vietnamese",
    prepTime: 30,
    cookTime: 120,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Rice noodles", quantity: 200, unit: "grams" },
      { id: null, name: "Vegetable broth", quantity: 1, unit: "liter" },
      { id: null, name: "Star anise", quantity: 2, unit: "count" },
      { id: null, name: "Cinnamon stick", quantity: 1, unit: "count" },
      { id: null, name: "Ginger", quantity: 50, unit: "grams" },
      { id: null, name: "Bean sprouts", quantity: 150, unit: "grams" },
      { id: null, name: "Thai basil", quantity: 10, unit: "leaves" }
    ],
    instructions: [
      "Simmer vegetable broth with spices for 1 hour",
      "Cook rice noodles",
      "Prepare garnishes",
      "Assemble bowls with noodles, broth, and toppings",
      "Serve hot"
    ],
    imageUrl: "",
    tags: ["vietnamese", "soup", "vegetarian", "noodles"],
    nutritionalInfo: {
      calories: 250,
      protein: 6,
      carbs: 45,
      fats: 2
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "82",
    title: "Stuffed Sweet Potatoes",
    description: "Baked sweet potatoes filled with black beans, corn, and avocado",
    cuisine: "American",
    prepTime: 10,
    cookTime: 40,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Sweet potatoes", quantity: 4, unit: "count" },
      { id: null, name: "Black beans", quantity: 200, unit: "grams" },
      { id: null, name: "Corn", quantity: 150, unit: "grams" },
      { id: null, name: "Avocado", quantity: 1, unit: "count" },
      { id: null, name: "Lime", quantity: 1, unit: "count" }
    ],
    instructions: [
      "Bake sweet potatoes until tender",
      "Mix black beans and corn",
      "Slice sweet potatoes and fill with the mixture",
      "Top with avocado and lime juice",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["vegetarian", "healthy", "quick", "comfort-food"],
    nutritionalInfo: {
      calories: 300,
      protein: 8,
      carbs: 50,
      fats: 8
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "83",
    title: "Chicken Tortilla Soup",
    description: "A hearty Mexican soup with chicken, tomatoes, and crispy tortilla strips",
    cuisine: "Mexican",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Chicken breast", quantity: 300, unit: "grams" },
      { id: null, name: "Tomatoes", quantity: 400, unit: "grams" },
      { id: null, name: "Chicken broth", quantity: 1, unit: "liter" },
      { id: null, name: "Corn", quantity: 150, unit: "grams" },
      { id: null, name: "Tortilla strips", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Cook chicken and shred",
      "Simmer tomatoes, broth, and corn",
      "Add chicken and season to taste",
      "Top with tortilla strips before serving"
    ],
    imageUrl: "",
    tags: ["mexican", "soup", "chicken", "comfort-food"],
    nutritionalInfo: {
      calories: 320,
      protein: 20,
      carbs: 30,
      fats: 10
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "84",
    title: "Spinach and Ricotta Cannelloni",
    description: "Pasta tubes stuffed with spinach and ricotta, baked in marinara sauce",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 40,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Cannelloni tubes", quantity: 12, unit: "count" },
      { id: null, name: "Spinach", quantity: 300, unit: "grams" },
      { id: null, name: "Ricotta cheese", quantity: 200, unit: "grams" },
      { id: null, name: "Marinara sauce", quantity: 500, unit: "ml" },
      { id: null, name: "Parmesan cheese", quantity: 50, unit: "grams" }
    ],
    instructions: [
      "Cook spinach and mix with ricotta",
      "Stuff cannelloni tubes with the mixture",
      "Place in a baking dish and cover with marinara sauce",
      "Sprinkle with Parmesan and bake at 375°F (190°C) for 40 minutes"
    ],
    imageUrl: "",
    tags: ["italian", "vegetarian", "pasta", "baking"],
    nutritionalInfo: {
      calories: 400,
      protein: 18,
      carbs: 45,
      fats: 12
    },
    ratings: {
      average: 4.7,
      count: 640
    },
    views: 9800
  },
  {
    id: "85",
    title: "Lemon Bars",
    description: "Tangy and sweet lemon bars with a buttery shortbread crust",
    cuisine: "American",
    prepTime: 20,
    cookTime: 30,
    servings: 12,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Flour", quantity: 200, unit: "grams" },
      { id: null, name: "Butter", quantity: 100, unit: "grams" },
      { id: null, name: "Sugar", quantity: 150, unit: "grams" },
      { id: null, name: "Lemon juice", quantity: 100, unit: "ml" },
      { id: null, name: "Eggs", quantity: 3, unit: "count" }
    ],
    instructions: [
      "Prepare shortbread crust and bake until golden",
      "Mix lemon juice, sugar, and eggs for the filling",
      "Pour filling over crust and bake until set",
      "Cool and slice into bars"
    ],
    imageUrl: "",
    tags: ["dessert", "lemon", "baking", "sweet"],
    nutritionalInfo: {
      calories: 180,
      protein: 3,
      carbs: 25,
      fats: 8
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "86",
    title: "Vegetable Sushi Rolls",
    description: "Fresh and colorful sushi rolls with vegetables and rice",
    cuisine: "Japanese",
    prepTime: 40,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Sushi rice", quantity: 300, unit: "grams" },
      { id: null, name: "Nori sheets", quantity: 6, unit: "count" },
      { id: null, name: "Cucumber", quantity: 1, unit: "count" },
      { id: null, name: "Carrots", quantity: 2, unit: "count" },
      { id: null, name: "Avocado", quantity: 1, unit: "count" }
    ],
    instructions: [
      "Prepare sushi rice",
      "Slice vegetables into thin strips",
      "Place rice and vegetables on nori sheets and roll tightly",
      "Slice into pieces and serve with soy sauce"
    ],
    imageUrl: "",
    tags: ["japanese", "vegetarian", "sushi", "healthy"],
    nutritionalInfo: {
      calories: 250,
      protein: 6,
      carbs: 45,
      fats: 4
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "87",
    title: "Beef Chili",
    description: "A hearty and spicy beef chili with beans and tomatoes",
    cuisine: "American",
    prepTime: 20,
    cookTime: 60,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Ground beef", quantity: 500, unit: "grams" },
      { id: null, name: "Kidney beans", quantity: 400, unit: "grams" },
      { id: null, name: "Tomatoes", quantity: 400, unit: "grams" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Chili powder", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Brown ground beef and onions",
      "Add tomatoes, beans, and spices",
      "Simmer for 1 hour",
      "Serve hot with toppings of choice"
    ],
    imageUrl: "",
    tags: ["american", "beef", "spicy", "comfort-food"],
    nutritionalInfo: {
      calories: 350,
      protein: 25,
      carbs: 30,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "88",
    title: "Vegetable Stir-Fry with Cashews",
    description: "A quick and healthy stir-fry with vegetables and roasted cashews",
    cuisine: "Asian",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Mixed vegetables", quantity: 300, unit: "grams" },
      { id: null, name: "Cashews", quantity: 50, unit: "grams" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Sesame oil", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Sauté garlic in sesame oil",
      "Add vegetables and stir-fry until tender",
      "Toss with soy sauce and cashews",
      "Serve hot with rice"
    ],
    imageUrl: "",
    tags: ["asian", "vegetarian", "stir-fry", "quick"],
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 20,
      fats: 14
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "89",
    title: "Chocolate Eclairs",
    description: "Classic French pastries filled with cream and topped with chocolate glaze",
    cuisine: "French",
    prepTime: 60,
    cookTime: 30,
    servings: 8,
    difficulty: "Hard",
    ingredients: [
      { id: null, name: "Flour", quantity: 150, unit: "grams" },
      { id: null, name: "Butter", quantity: 100, unit: "grams" },
      { id: null, name: "Eggs", quantity: 4, unit: "count" },
      { id: null, name: "Heavy cream", quantity: 200, unit: "ml" },
      { id: null, name: "Dark chocolate", quantity: 100, unit: "grams" }
    ],
    instructions: [
      "Prepare choux pastry and bake until golden",
      "Whip cream for filling",
      "Fill eclairs with cream and top with melted chocolate",
      "Chill before serving"
    ],
    imageUrl: "",
    tags: ["french", "dessert", "pastry", "baking"],
    nutritionalInfo: {
      calories: 300,
      protein: 6,
      carbs: 25,
      fats: 18
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "90",
    title: "Vegetable Lasagna",
    description: "Layered lasagna with vegetables, ricotta, and marinara sauce",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Lasagna noodles", quantity: 12, unit: "count" },
      { id: null, name: "Ricotta cheese", quantity: 400, unit: "grams" },
      { id: null, name: "Mozzarella cheese", quantity: 300, unit: "grams" },
      { id: null, name: "Marinara sauce", quantity: 800, unit: "ml" },
      { id: null, name: "Zucchini", quantity: 2, unit: "count" }
    ],
    instructions: [
      "Cook lasagna noodles",
      "Prepare vegetable filling",
      "Layer noodles, sauce, vegetables, and cheese",
      "Bake at 375°F (190°C) for 45 minutes",
      "Let rest before serving"
    ],
    imageUrl: "",
    tags: ["italian", "vegetarian", "lasagna", "baking"],
    nutritionalInfo: {
      calories: 420,
      protein: 22,
      carbs: 45,
      fats: 18
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "91",
    title: "Chicken Satay",
    description: "Grilled chicken skewers served with a creamy peanut sauce",
    cuisine: "Thai",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Chicken breast", quantity: 500, unit: "grams" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Peanut butter", quantity: 100, unit: "grams" },
      { id: null, name: "Coconut milk", quantity: 100, unit: "ml" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Lime juice", quantity: 1, unit: "tbsp" }
    ],
    instructions: [
      "Marinate chicken in soy sauce and garlic",
      "Grill chicken skewers until cooked",
      "Prepare peanut sauce with peanut butter, coconut milk, and lime juice",
      "Serve skewers with sauce"
    ],
    imageUrl: "",
    tags: ["thai", "chicken", "grilling", "appetizer"],
    nutritionalInfo: {
      calories: 320,
      protein: 28,
      carbs: 10,
      fats: 18
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "92",
    title: "Vegetable Tempura",
    description: "Crispy battered vegetables served with a soy dipping sauce",
    cuisine: "Japanese",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Mixed vegetables", quantity: 300, unit: "grams" },
      { id: null, name: "Flour", quantity: 100, unit: "grams" },
      { id: null, name: "Cornstarch", quantity: 50, unit: "grams" },
      { id: null, name: "Sparkling water", quantity: 200, unit: "ml" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Prepare tempura batter with flour, cornstarch, and sparkling water",
      "Dip vegetables in batter and fry until golden",
      "Serve with soy dipping sauce"
    ],
    imageUrl: "",
    tags: ["japanese", "vegetarian", "crispy", "appetizer"],
    nutritionalInfo: {
      calories: 250,
      protein: 4,
      carbs: 30,
      fats: 10
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "93",
    title: "Stuffed Eggplant",
    description: "Baked eggplant halves filled with a savory mixture of quinoa and vegetables",
    cuisine: "Mediterranean",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Eggplants", quantity: 2, unit: "count" },
      { id: null, name: "Quinoa", quantity: 150, unit: "grams" },
      { id: null, name: "Tomatoes", quantity: 2, unit: "count" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 2, unit: "cloves" },
      { id: null, name: "Olive oil", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Halve and hollow out eggplants",
      "Cook quinoa and mix with sautéed vegetables",
      "Fill eggplants with the mixture and bake at 375°F (190°C) for 30 minutes",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["mediterranean", "vegetarian", "healthy", "baking"],
    nutritionalInfo: {
      calories: 280,
      protein: 8,
      carbs: 35,
      fats: 10
    },
    ratings: {
      average: 4.8,
      count: 620
    },
    views: 10200
  },
  {
    id: "94",
    title: "Beef Bourguignon",
    description: "A rich French stew with beef, red wine, and vegetables",
    cuisine: "French",
    prepTime: 30,
    cookTime: 180,
    servings: 6,
    difficulty: "Hard",
    ingredients: [
      { id: null, name: "Beef chunks", quantity: 1, unit: "kg" },
      { id: null, name: "Red wine", quantity: 500, unit: "ml" },
      { id: null, name: "Carrots", quantity: 3, unit: "count" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Garlic", quantity: 3, unit: "cloves" },
      { id: null, name: "Beef broth", quantity: 500, unit: "ml" }
    ],
    instructions: [
      "Brown beef chunks in a pot",
      "Add vegetables, wine, and broth",
      "Simmer for 3 hours until tender",
      "Serve with crusty bread"
    ],
    imageUrl: "",
    tags: ["french", "beef", "stew", "comfort-food"],
    nutritionalInfo: {
      calories: 450,
      protein: 35,
      carbs: 10,
      fats: 20
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "95",
    title: "Pineapple Fried Rice",
    description: "Sweet and savory fried rice with pineapple and cashews",
    cuisine: "Thai",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Cooked rice", quantity: 400, unit: "grams" },
      { id: null, name: "Pineapple chunks", quantity: 200, unit: "grams" },
      { id: null, name: "Cashews", quantity: 50, unit: "grams" },
      { id: null, name: "Soy sauce", quantity: 2, unit: "tbsp" },
      { id: null, name: "Green onions", quantity: 2, unit: "stalks" }
    ],
    instructions: [
      "Stir-fry pineapple and cashews",
      "Add rice and soy sauce, toss to combine",
      "Garnish with green onions and serve"
    ],
    imageUrl: "",
    tags: ["thai", "rice", "vegetarian", "quick"],
    nutritionalInfo: {
      calories: 300,
      protein: 6,
      carbs: 45,
      fats: 8
    },
    ratings: {
      average: 4.7,
      count: 540
    },
    views: 8900
  },
  {
    id: "96",
    title: "Lamb Rogan Josh",
    description: "A flavorful Indian curry with tender lamb and aromatic spices",
    cuisine: "Indian",
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Lamb chunks", quantity: 1, unit: "kg" },
      { id: null, name: "Yogurt", quantity: 200, unit: "grams" },
      { id: null, name: "Tomatoes", quantity: 400, unit: "grams" },
      { id: null, name: "Onion", quantity: 2, unit: "count" },
      { id: null, name: "Garlic", quantity: 4, unit: "cloves" },
      { id: null, name: "Garam masala", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Brown lamb and set aside",
      "Sauté onions, garlic, and spices",
      "Add tomatoes and yogurt, simmer with lamb for 90 minutes",
      "Serve with rice or naan"
    ],
    imageUrl: "",
    tags: ["indian", "lamb", "curry", "spicy"],
    nutritionalInfo: {
      calories: 480,
      protein: 35,
      carbs: 15,
      fats: 30
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "97",
    title: "Caprese Skewers",
    description: "Mini skewers with cherry tomatoes, mozzarella, and basil",
    cuisine: "Italian",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Cherry tomatoes", quantity: 200, unit: "grams" },
      { id: null, name: "Mozzarella balls", quantity: 200, unit: "grams" },
      { id: null, name: "Fresh basil leaves", quantity: 20, unit: "count" },
      { id: null, name: "Balsamic glaze", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Thread tomatoes, mozzarella, and basil onto skewers",
      "Drizzle with balsamic glaze",
      "Serve as an appetizer"
    ],
    imageUrl: "",
    tags: ["italian", "appetizer", "vegetarian", "quick"],
    nutritionalInfo: {
      calories: 150,
      protein: 8,
      carbs: 5,
      fats: 10
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "98",
    title: "Pumpkin Soup",
    description: "Creamy and comforting pumpkin soup with a hint of nutmeg",
    cuisine: "American",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Pumpkin puree", quantity: 400, unit: "grams" },
      { id: null, name: "Vegetable broth", quantity: 1, unit: "liter" },
      { id: null, name: "Heavy cream", quantity: 100, unit: "ml" },
      { id: null, name: "Onion", quantity: 1, unit: "count" },
      { id: null, name: "Nutmeg", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Sauté onion in a pot",
      "Add pumpkin puree, broth, and nutmeg, simmer for 20 minutes",
      "Blend until smooth and stir in cream",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["american", "soup", "vegetarian", "comfort-food"],
    nutritionalInfo: {
      calories: 220,
      protein: 4,
      carbs: 20,
      fats: 12
    },
    ratings: {
      average: 4.8,
      count: 720
    },
    views: 11200
  },
  {
    id: "99",
    title: "Seafood Paella",
    description: "A classic Spanish rice dish with shrimp, mussels, and saffron",
    cuisine: "Spanish",
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      { id: null, name: "Bomba rice", quantity: 300, unit: "grams" },
      { id: null, name: "Shrimp", quantity: 200, unit: "grams" },
      { id: null, name: "Mussels", quantity: 200, unit: "grams" },
      { id: null, name: "Saffron", quantity: 1, unit: "pinch" },
      { id: null, name: "Chicken broth", quantity: 1, unit: "liter" }
    ],
    instructions: [
      "Sauté rice with saffron",
      "Add broth and simmer until rice is cooked",
      "Add seafood and cook until done",
      "Serve warm"
    ],
    imageUrl: "",
    tags: ["spanish", "seafood", "rice", "one-pot"],
    nutritionalInfo: {
      calories: 400,
      protein: 25,
      carbs: 50,
      fats: 10
    },
    ratings: {
      average: 4.9,
      count: 860
    },
    views: 13200
  },
  {
    id: "100",
    title: "Chocolate Truffles",
    description: "Rich and creamy chocolate truffles rolled in cocoa powder",
    cuisine: "French",
    prepTime: 20,
    cookTime: 0,
    servings: 12,
    difficulty: "Easy",
    ingredients: [
      { id: null, name: "Dark chocolate", quantity: 200, unit: "grams" },
      { id: null, name: "Heavy cream", quantity: 100, unit: "ml" },
      { id: null, name: "Cocoa powder", quantity: 50, unit: "grams" }
    ],
    instructions: [
      "Melt chocolate with cream",
      "Chill mixture until firm",
      "Roll into balls and coat with cocoa powder",
      "Serve chilled"
    ],
    imageUrl: "",
    tags: ["french", "dessert", "chocolate", "easy"],
    nutritionalInfo: {
      calories: 120,
      protein: 2,
      carbs: 10,
      fats: 8
    },
    ratings: {
      average: 4.9,
      count: 960
    },
    views: 14200
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