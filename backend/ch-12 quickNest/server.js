import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.use((req, res, next) => {
  const error = new HttpError("requested route not found", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.statuscode || 500).json({ message: error.message || "An unknown error occurred" });
});
const PORT = process.env.PORT || 5000;

console.log("port", PORT);

async function startServer() {
    try{
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    }catch(error){
     console.log(error);
     process.exit(1);
    }
}

startServer();