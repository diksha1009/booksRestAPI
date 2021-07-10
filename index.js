const express = require("express");
const mongoose = require("mongoose");
const app=express();

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb+srv://diksha:diksha@123@cluster0.bflkl.mongodb.net/booksdb?retryWrites=true&w=majority",
{useNewUrlParser:true,  useUnifiedTopology: true }).then(()=>{
    console.log("DB connection established")
})



app.listen(PORT, ()=>{
    console.log("Server started at "+PORT)
})