//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import cors from 'cors';

import inventoryRoutes from './routes/inventoryRoutes.mjs';
import gardenRoutes from './routes/garderLogRoutes.mjs';
import userRoutes from './routes/userRoutes.mjs';

//Set up
const app = express();
dotenv.config();


//db Connect
connectDB();

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/inventory", inventoryRoutes);
app.use("/api/garden", gardenRoutes);
app.use("/api/user", userRoutes);

app.get('/', (req, res) => { //testing server
    res.send('Server is running');
});

//Listener
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
