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
app.use( //post doesn't work
  "/recipes-create",
  createProxyMiddleware({
    target: "http://localhost:4002/recipes/create",
    changeOrigin: true
  })
);


app.use( //post doesn't work
  "/recipes-get",
  createProxyMiddleware({
    target: "http://localhost:4002/recipes/get",
    changeOrigin: true
  })
)
// Ingredients Service
app.use( //works
  "/ingredients-get",
  createProxyMiddleware({
    target: "http://localhost:4003/ingredients/getall",
    changeOrigin: true,
  })
);

app.post(//post doesn't work
  "/ingredients-add",
  createProxyMiddleware({
    target: "http://localhost:4003/ingredients/add",    // Base URL only
    changeOrigin: true,
    // pathRewrite: {
    //   "^/ingredients-add": "/ingredients/add"  // Explicit path rewriting
    // }
  })
)

// Tags Service
app.use( //works
  "/tags",
  createProxyMiddleware({
    target: "http://localhost:4004/tags/getall",
    changeOrigin: true,
  })
);

// Top Recipes Service
app.use( //works
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
