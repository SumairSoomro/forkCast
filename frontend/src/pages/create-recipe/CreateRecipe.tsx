import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar"; 
import Footer from "../../components/Footer/Footer"; 

const CreateRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "",
    ingredients: "",
    instructions: "",
    tags: "",
    nutritionalInfo: {
      calories: "",
      protein: "",
      carbs: "",
      fats: "",
    },
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNutritionalChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      nutritionalInfo: {
        ...prev.nutritionalInfo,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setMessage("Please log in to create a recipe.");
        return;
      }

      await axios.post(
        "http://localhost:4000/recipes/create",
        {
          ...recipe,
          prepTime: Number(recipe.prepTime),
          cookTime: Number(recipe.cookTime),
          servings: Number(recipe.servings),
          ingredients: recipe.ingredients.split(",").map((ing) => ({
            name: ing.trim(),
            quantity: 1,
            unit: "",
          })),
          instructions: recipe.instructions.split("\n").map((step, instructionIndex) => ({
            step,
            instructionIndex,
          })),
          tags: recipe.tags.split(",").map((tag) => tag.trim()),
          nutritionalInfo: {
            calories: Number(recipe.nutritionalInfo.calories),
            protein: Number(recipe.nutritionalInfo.protein),
            carbs: Number(recipe.nutritionalInfo.carbs),
            fats: Number(recipe.nutritionalInfo.fats),
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Recipe created successfully!");
      setRecipe({
        title: "",
        description: "",
        prepTime: "",
        cookTime: "",
        servings: "",
        difficulty: "",
        ingredients: "",
        instructions: "",
        tags: "",
        nutritionalInfo: {
          calories: "",
          protein: "",
          carbs: "",
          fats: "",
        },
      });
    } catch (err) {
      console.error(err);
      setMessage("Failed to create recipe.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar brand="Forkcast" items={[
        { label: "Homepage", path: "/homepage" },
        { label: "Profile", path: "/profile" },
        { label: "Calendar", path: "/calendar" },
        { label: "Favorites", path: "/favorites" },
        { label: "Contact Us", path: "/contact" },
      ]} />
      <main className="flex-1">
        <Box
          maxW="md"
          mx="auto"
          mt={6}
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
        >
          <VStack spacing={4} align="start">
            <Heading size="md">Create a Recipe</Heading>

            <Input placeholder="Title" name="title" value={recipe.title} onChange={handleInputChange} />
            <Textarea placeholder="Description" name="description" value={recipe.description} onChange={handleInputChange} />
            <Input placeholder="Preparation Time (minutes)" name="prepTime" type="text" value={recipe.prepTime} onChange={handleInputChange} />
            <Input placeholder="Cooking Time (minutes)" name="cookTime" type="text" value={recipe.cookTime} onChange={handleInputChange} />
            <Input placeholder="Servings" name="servings" type="text" value={recipe.servings} onChange={handleInputChange} />
            <Input placeholder="Difficulty (Easy, Medium, Hard)" name="difficulty" value={recipe.difficulty} onChange={handleInputChange} />
            <Textarea placeholder="Ingredients (comma-separated)" name="ingredients" value={recipe.ingredients} onChange={handleInputChange} />
            <Textarea placeholder="Instructions (one per line)" name="instructions" value={recipe.instructions} onChange={handleInputChange} />
            <Textarea placeholder="Tags (comma-separated)" name="tags" value={recipe.tags} onChange={handleInputChange} />

            <Heading size="sm">Nutritional Info</Heading>
            <Input placeholder="Calories" name="calories" type="text" value={recipe.nutritionalInfo.calories} onChange={handleNutritionalChange} />
            <Input placeholder="Protein (g)" name="protein" type="text" value={recipe.nutritionalInfo.protein} onChange={handleNutritionalChange} />
            <Input placeholder="Carbs (g)" name="carbs" type="text" value={recipe.nutritionalInfo.carbs} onChange={handleNutritionalChange} />
            <Input placeholder="Fats (g)" name="fats" type="text" value={recipe.nutritionalInfo.fats} onChange={handleNutritionalChange} />

            <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>

            {message && (
              <Text color={message.includes("successfully") ? "green.500" : "red.500"}>{message}</Text>
            )}
          </VStack>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default CreateRecipe;