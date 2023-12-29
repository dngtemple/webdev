const express=require("express");

const router=(express.Router());

router.get("/",function(req,res){
    res.send({message:"get coming for "});

})

router.post("/id",function(req,res){
    res.send({message:"Post coming users"});
})

module.exports=router;