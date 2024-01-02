const express=require("express");
const app=(express());
app.use(express.json());
const mongoose=require("mongoose");


const movierouter = require("./routes/movies_end");
const userrouter=require("./routes/users.end");

mongoose.connect("mongodb://127.0.0.1:27017/dummy")
.then(function(msg){
    console.log("Database successfull connected");
})
.catch(function(err){
    console.log("Error connecting to database");
})


app.use("/movies",movierouter);
app.use("/users",userrouter);



app.listen(8000,function(){
    console.log("Server connected");
})