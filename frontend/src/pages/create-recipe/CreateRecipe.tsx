import React, { useEffect, useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
  Heading,
  Checkbox,
  SimpleGrid,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface NutritionalInfo {
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
}

interface RecipeIngredient {
  id: string;
  quantity: string;
  unit: string;
}

interface Recipe {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: string;
  ingredients: RecipeIngredient[];
  instructions: string;
  tags: string[];
  nutritionalInfo: NutritionalInfo;
}

interface Tag {
  id: string;
  name: string;
}

interface Ingredient {
  id: string;
  name: string;
}

interface NavItem {
  label: string;
  path: string;
}

const CreateRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "",
    ingredients: [],
    instructions: "",
    tags: [],
    nutritionalInfo: {
      calories: "",
      protein: "",
      carbs: "",
      fats: "",
    },
  });

  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [availableIngredients, setAvailableIngredients] = useState<Ingredient[]>([]);
  const [message, setMessage] = useState<string>("");
  const [tagSearchQuery, setTagSearchQuery] = useState<string>("");
  const [ingredientSearchQuery, setIngredientSearchQuery] = useState<string>("");
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchTags = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:4000/tags/getall");
        if (!response.ok) throw new Error("Failed to fetch tags");
        const data: Tag[] = await response.json();
        setAvailableTags(data);
        setFilteredTags(data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchIngredients = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:4000/ingredients/getall");
        if (!response.ok) throw new Error("Failed to fetch ingredients");
        const data: Ingredient[] = await response.json();
        setAvailableIngredients(data);
        setFilteredIngredients(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTags();
    fetchIngredients();
  }, []);

  useEffect(() => {
    setFilteredTags(
      tagSearchQuery.trim() === ""
        ? availableTags
        : availableTags.filter(tag => tag.name.toLowerCase().includes(tagSearchQuery.toLowerCase()))
    );
  }, [tagSearchQuery, availableTags]);

  useEffect(() => {
    setFilteredIngredients(
      ingredientSearchQuery.trim() === ""
        ? availableIngredients
        : availableIngredients.filter(ingredient => ingredient.name.toLowerCase().includes(ingredientSearchQuery.toLowerCase()))
    );
  }, [ingredientSearchQuery, availableIngredients]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleNutritionalChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setRecipe(prev => ({
      ...prev,
      nutritionalInfo: { ...prev.nutritionalInfo, [name]: value },
    }));
  };

  const handleTagToggle = (tagId: string): void => {
    setRecipe(prev => ({
      ...prev,
      tags: prev.tags.includes(tagId)
        ? prev.tags.filter(id => id !== tagId)
        : [...prev.tags, tagId],
    }));
  };

  const handleIngredientToggle = (ingredientId: string): void => {
    setRecipe(prev => {
      const exists = prev.ingredients.find(ing => ing.id === ingredientId);
      return exists
        ? { ...prev, ingredients: prev.ingredients.filter(ing => ing.id !== ingredientId) }
        : { ...prev, ingredients: [...prev.ingredients, { id: ingredientId, quantity: "", unit: "g" }] };
    });
  };

  const updateIngredientField = (ingredientId: string, field: "quantity" | "unit", value: string) => {
    setRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.map(ing =>
        ing.id === ingredientId ? { ...ing, [field]: value } : ing
      ),
    }));
  };

  const getTagName = (tagId: string): string => availableTags.find(tag => tag.id === tagId)?.name || "";

  const handleSubmit = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return setMessage("Please log in to create a recipe.");

      const ingredientsData = recipe.ingredients.map(({ id, quantity, unit }) => ({
        ingredientId: id,
        quantity: Number(quantity),
        unit,
      }));

      const response = await fetch("http://localhost:4002/recipes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...recipe,
          prepTime: Number(recipe.prepTime),
          cookTime: Number(recipe.cookTime),
          servings: Number(recipe.servings),
          ingredients: ingredientsData,
          instructions: recipe.instructions.split("\n").map((step, instructionIndex) => ({ step, instructionIndex })),
          nutritionalInfo: {
            calories: Number(recipe.nutritionalInfo.calories),
            protein: Number(recipe.nutritionalInfo.protein),
            carbs: Number(recipe.nutritionalInfo.carbs),
            fats: Number(recipe.nutritionalInfo.fats),
          },
        })
      });

      if (!response.ok) throw new Error("Failed to create recipe");

      setMessage("Recipe created successfully!");
      setRecipe({
        title: "",
        description: "",
        prepTime: "",
        cookTime: "",
        servings: "",
        difficulty: "",
        ingredients: [],
        instructions: "",
        tags: [],
        nutritionalInfo: { calories: "", protein: "", carbs: "", fats: "" },
      });
    } catch (err) {
      console.error(err);
      setMessage("Failed to create recipe.");
    }
  };

  const navItems: NavItem[] = [
    { label: "Homepage", path: "/homepage" },
    { label: "Profile", path: "/profile" },
    { label: "Calendar", path: "/calendar" },
    { label: "Favorites", path: "/favorites" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar brand="Forkcast" items={navItems} />
      <main className="flex-1">
        <Box maxW="md" mx="auto" mt={6} p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <VStack spacing={4} align="start">
            <Heading size="md">Create a Recipe</Heading>
            <Input placeholder="Title" name="title" value={recipe.title} onChange={handleInputChange} />
            <Textarea placeholder="Description" name="description" value={recipe.description} onChange={handleInputChange} />
            <Input placeholder="Preparation Time (minutes)" name="prepTime" type="text" value={recipe.prepTime} onChange={handleInputChange} />
            <Input placeholder="Cooking Time (minutes)" name="cookTime" type="text" value={recipe.cookTime} onChange={handleInputChange} />
            <Input placeholder="Servings" name="servings" type="text" value={recipe.servings} onChange={handleInputChange} />
            <Input placeholder="Difficulty (Easy, Medium, Hard)" name="difficulty" value={recipe.difficulty} onChange={handleInputChange} />

            <Box width="100%">
              <Heading size="sm" mb={2}>Ingredients</Heading>
              <InputGroup mb={3}>
                <InputLeftElement pointerEvents="none">
                  <Search size={18} />
                </InputLeftElement>
                <Input placeholder="Search ingredients" value={ingredientSearchQuery} onChange={(e) => setIngredientSearchQuery(e.target.value)} size="md" />
              </InputGroup>

              <Box maxH="200px" overflowY="auto" borderWidth="1px" borderRadius="md" p={2} mb={3}>
                <SimpleGrid columns={1} spacing={2}>
                  {filteredIngredients.map((ingredient) => {
                    const existing = recipe.ingredients.find((ing) => ing.id === ingredient.id);
                    return (
                      <Box key={ingredient.id} mb={2}>
                        <Flex align="center" gap={2} wrap="wrap">
                          <Checkbox isChecked={!!existing} onChange={() => handleIngredientToggle(ingredient.id)} colorScheme="blue" size="sm">
                            {ingredient.name}
                          </Checkbox>
                          {existing && (
                            <>
                              <Input placeholder="Qty" value={existing.quantity} onChange={(e) => updateIngredientField(ingredient.id, "quantity", e.target.value)} width="80px" type="number" size="sm" />
                              <select value={existing.unit} onChange={(e) => updateIngredientField(ingredient.id, "unit", e.target.value)}>
                                <option value="g">g</option>
                                <option value="kg">kg</option>
                                <option value="ml">mL</option>
                                <option value="l">L</option>
                                <option value="count">count</option>
                              </select>
                            </>
                          )}
                        </Flex>
                      </Box>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Box>

            <Textarea placeholder="Instructions (one per line)" name="instructions" value={recipe.instructions} onChange={handleInputChange} />

            <Box width="100%">
              <Heading size="sm" mb={2}>Tags</Heading>
              <Flex flexWrap="wrap" mb={3} gap={2}>
                {recipe.tags.map(tagId => (
                  <Tag key={tagId} size="md" colorScheme="teal" borderRadius="full">
                    <TagLabel>{getTagName(tagId)}</TagLabel>
                    <TagCloseButton onClick={() => handleTagToggle(tagId)} />
                  </Tag>
                ))}
              </Flex>
              <InputGroup mb={3}>
                <InputLeftElement pointerEvents="none">
                  <Search size={18} />
                </InputLeftElement>
                <Input placeholder="Search tags" value={tagSearchQuery} onChange={(e) => setTagSearchQuery(e.target.value)} size="md" />
              </InputGroup>
              <Box maxH="200px" overflowY="auto" borderWidth="1px" borderRadius="md" p={2}>
                <SimpleGrid columns={2} spacing={2}>
                  {filteredTags.map(tag => (
                    <Checkbox key={tag.id} isChecked={recipe.tags.includes(tag.id)} onChange={() => handleTagToggle(tag.id)} colorScheme="teal" size="sm">
                      {tag.name}
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>

            <Heading size="sm">Nutritional Info</Heading>
            <Input placeholder="Calories" name="calories" type="text" value={recipe.nutritionalInfo.calories} onChange={handleNutritionalChange} />
            <Input placeholder="Protein (g)" name="protein" type="text" value={recipe.nutritionalInfo.protein} onChange={handleNutritionalChange} />
            <Input placeholder="Carbs (g)" name="carbs" type="text" value={recipe.nutritionalInfo.carbs} onChange={handleNutritionalChange} />
            <Input placeholder="Fats (g)" name="fats" type="text" value={recipe.nutritionalInfo.fats} onChange={handleNutritionalChange} />

            <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
            {message && <Text color={message.includes("successfully") ? "green.500" : "red.500"}>{message}</Text>}
          </VStack>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default CreateRecipe;
