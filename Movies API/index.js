// introduction to express

const express=require("express");
const app=(express());

app.get("/products",function(req,res){
    res.send("Get response coming in");
})

app.post("/products",gateman,function(req,res){
    console.log(req.headers);
    res.send("Post response coming in");
})

app.listen(8000,function(){
    console.log("Server is running");
})



// learning about middleware which is a gateman between client and endpoint in the server

function gateman(req,res,pusher){

    if(req.headers['content-type'] ===undefined){
        res.send("Errors in the post headers");
    }
    else{
        pusher();
    }
}