require('dotenv').config(); // Load environment variables from .env file

const express =require('express');
const connectMongo=require('./config/db');
const router=require('./routes/noteRoutes');
const cors=require('cors');
const errorHandler=require('./middleware/errorHandler');

connectMongo();

const app=express();

app.use(cors()); /// Allow cross-origin requests from any domain (for development purposes)
app.use(express.json()); // Middleware to parse JSON request bodies

app.use('/api/notes',router); // Mount note routes at /api/notes

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use(errorHandler); // Custom error handling middleware

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server is running on PORT no :",PORT); 
    
})



