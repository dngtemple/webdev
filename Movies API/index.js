const express=require("express");
const app=(express());

app.get("/products",function(req,res){
    res.send("Get response coming in");
})

app.post("/products",function(req,res){
    res.send("Post response coming in");
})

app.listen(8000,function(){
    console.log("Server is running");
})