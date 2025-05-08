import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios, { AxiosError } from 'axios';

dotenv.config();
const app = express();
const PORT = 4000;
const AUTH_SERVICE_URL = 'http://localhost:4001/auth';
const INGREDIENTS_SERVICE_URL = 'http://localhost:4003/ingredients';
const RECIPES_SERVICE_URL = 'http://localhost:4002/recipes';
const TAGS_SERVICE_URL = 'http://localhost:4004/tags';
const TOP_RECIPES_SERVICE_URL = 'http://localhost:4005/topRec';

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware
interface ErrorResponse {
  error: string;
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
};

// Request validation middleware
const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'POST' && !req.body) {
    return res.status(400).json({ error: 'Request body is required' });
  }
  next();
};

// Generic request forwarding function
const forwardRequest = async (req: Request, res: Response, serviceUrl: string, endpoint: string) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${serviceUrl}${endpoint}`,
      data: req.body,
      headers: {
        Authorization: req.headers.authorization,
        'Content-Type': 'application/json',
      },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response) {
      res.status(axiosError.response.status).json({
        error: axiosError.response.data?.error || 'Service error',
      });
    } else {
      res.status(503).json({ error: 'Service unavailable' });
    }
  }
};

// Auth Routes
app.post('/api/auth/signup', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, AUTH_SERVICE_URL, '/signup');
});

app.post('/api/auth/login', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, AUTH_SERVICE_URL, '/login');
});

app.get('/api/auth/user', async (req: Request, res: Response) => {
  await forwardRequest(req, res, AUTH_SERVICE_URL, '/user');
});

app.post('/api/auth/logout', async (req: Request, res: Response) => {
  await forwardRequest(req, res, AUTH_SERVICE_URL, '/logout');
});

// Ingredients Routes
app.post('/api/ingredients/add', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, INGREDIENTS_SERVICE_URL, '/add');
});

app.get('/api/ingredients/getall', async (req: Request, res: Response) => {
  await forwardRequest(req, res, INGREDIENTS_SERVICE_URL, '/getall');
});

app.post('/ingredients/add', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, INGREDIENTS_SERVICE_URL, '/add');
});

app.get('/ingredients/getall', async (req: Request, res: Response) => {
  await forwardRequest(req, res, INGREDIENTS_SERVICE_URL, '/getall');
});

// Recipes Routes
app.post('/api/recipes/create', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, RECIPES_SERVICE_URL, '/create');
});

app.post('/api/recipes/get', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, RECIPES_SERVICE_URL, '/get');
});

app.post('/recipes/create', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, RECIPES_SERVICE_URL, '/create');
});

app.post('/recipes/get', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, RECIPES_SERVICE_URL, '/get');
});

// Tags Routes
app.post('/api/tags/add', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, TAGS_SERVICE_URL, '/add');
});

app.get('/api/tags/getall', async (req: Request, res: Response) => {
  await forwardRequest(req, res, TAGS_SERVICE_URL, '/getall');
});

app.post('/tags/add', validateRequest, async (req: Request, res: Response) => {
  await forwardRequest(req, res, TAGS_SERVICE_URL, '/add');
});

app.get('/tags/getall', async (req: Request, res: Response) => {
  await forwardRequest(req, res, TAGS_SERVICE_URL, '/getall');
});

// Top Recipes Routes
app.get('/api/topRec/top-favorited', async (req: Request, res: Response) => {
  await forwardRequest(req, res, TOP_RECIPES_SERVICE_URL, '/top-favorited');
});

app.get('/topRec/top-favorited', async (req: Request, res: Response) => {
  await forwardRequest(req, res, TOP_RECIPES_SERVICE_URL, '/top-favorited');
});

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'API Gateway is running' });
});

// Apply error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});