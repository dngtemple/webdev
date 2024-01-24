
const express=require("express");

const app=(express());

// routing for users
const userRouter=require("./users");
app.use("/users",userRouter);



// routing for admins
const adminRouter=require("./admins");
app.use("/admins",adminRouter);


app.get("/products",function(req,res){
    res.send({message:"get coming"});

});

app.post("/products",function(req,res){
    res.send({message:"Post coming"});
})

app.listen(8000,function(){
    console.log("server is running");
})