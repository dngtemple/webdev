const express=require("express");

const router=(express.Router());

router.get("/",function(req,res){
    res.send({message:"Get coming in for admin"});


})

router.post("/id",function(req,res){
    res.send({message:"Post coming to admin"});
})

module.exports=router;