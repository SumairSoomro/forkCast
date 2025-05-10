import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ingredientRoutes from "./routes/ingredients.routes";

dotenv.config();

const app = express();
const PORT = 4003;

app.use(cors());
app.use(express.json());

app.use("/ingredients", ingredientRoutes);

app.get("/", (_req, res) => {
  res.send("Ingredients Service is running!");
});

app.listen(PORT, () => {
  console.log(`Ingredients Service running on http://localhost:${PORT}`);
});