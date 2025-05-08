import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Auth Service
app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
    pathRewrite: { "^/auth": "" },
  })
);

// Recipes Service
app.use(
  "/recipes",
  createProxyMiddleware({
    target: "http://localhost:4002",
    changeOrigin: true,
    pathRewrite: { "^/recipes": "" },
  })
);

// Ingredients Service
app.use(
  "/ingredients",
  createProxyMiddleware({
    target: "http://localhost:4003",
    changeOrigin: true,
    pathRewrite: { "^/ingredients": "" },
  })
);

// Tags Service
app.use(
  "/tags",
  createProxyMiddleware({
    target: "http://localhost:4004",
    changeOrigin: true,
    pathRewrite: { "^/tags": "" },
  })
);

// Top Recipes Service
// Top Recipes Service
app.use(
  "/topRec",
  createProxyMiddleware({
    target: "http://localhost:4005/topRec/top-favorited",
    changeOrigin: true,
  })
);

// Default Route
app.get("/", (_req, res) => {
  res.send("API Gateway is running");
});

app.listen(PORT, () => {
  console.log(`API Gateway running at http://localhost:${PORT}`);
});
