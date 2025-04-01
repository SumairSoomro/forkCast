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