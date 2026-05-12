import dotenv from 'dotenv';

dotenv.config();

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json('Hello World!');
});

const PORT = process.env.PORT || 5000;

console.log("port", PORT);

async function startServer() {
    try{

    }catch(error){
     
    }
}

