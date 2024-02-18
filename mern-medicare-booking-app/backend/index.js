import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// dbConfig
import { connectDB } from './config/dbConfig.js';

// port
const port = process.env.PORT || 1007;

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
app.get('/api/v1', (req, res) => {
    res.send('Hello World!');
});


// listen to the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    connectDB();
});