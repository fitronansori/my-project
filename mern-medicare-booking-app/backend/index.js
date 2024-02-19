import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// dbConfig
import { connectDB } from './config/dbConfig.js';

// port
const port = process.env.PORT || 1007;

// routes import
import authRoutes  from './routes/auth.js';
import userRoutes from './routes/user.js';

const app = express(); // create express app

const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

dotenv.config();


// routes
// auth routes
app.use('/api/v1/auth', authRoutes);

// user routes
app.use('/api/v1/users', userRoutes);


// listen to the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    connectDB();
});