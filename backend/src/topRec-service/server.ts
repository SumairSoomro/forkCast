import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import topRecRoutes from "./routes/topRec.routes";

dotenv.config();

const app = express();
const PORT =  4005;

app.use(cors());
app.use(express.json());

app.use("/topRec", topRecRoutes);

app.get("/", (_req, res) => {
  res.send("Top Recipes Service is running!");
});

app.listen(PORT, () => {
  console.log(`Top Recipes Service running on http://localhost:${PORT}`);
});