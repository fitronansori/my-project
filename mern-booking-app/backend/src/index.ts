import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/dbConfig';

// Connect to database
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
// Test route
app.get('/', (req: Request, res : Response) => {
  res.send('Hello World!');
});

// Server
const PORT = process.env.PORT || 2001;

app.listen(PORT, () =>console.log(`Server running on port ${PORT} http://localhost:${PORT}`));