import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";


const express = require("express");
const PORT = process.env.PORT || 3001;
// const [first, setFirst]= useState('')
const app = express();

const prisma = new PrismaClient()



app.get('/prisma', async(req:any, res:any)=>{
  try{
    const putElem = await prisma.post.create({
      data:{
        title: '456'
      }
    })
    const query = await prisma.post.findMany()
    res.json({elem :query})
  }
  catch(error){
    console.log(error)
    res.status(500).json({error: 'Error'})
  }
  
})

app.get("/api", (req:any, res:any) => {
    res.json({ message: "12"});
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });








  // server/index.js
// const path = require('path');
// const express = require('express');

// ...

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });
