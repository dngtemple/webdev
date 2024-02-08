const express=require("express");
const process=require("process");
const PORT=process.env.PORT || 8000;
const app=(express());
const cors=require("cors");
const mongoose=require("mongoose");


// inbuilt middlewares
app.use(express.json());
app.use(cors());

// imported routes
const req_login_router=require("./routes/req_login");

mongoose.connect("mongodb://127.0.0.1:27017/medplus")
.then(function(){
    console.log("Database successfully connected");
})


app.use("/app",req_login_router);


app.listen(PORT,function(){
    console.log("Server is running successfully");
})