const express=require("express");
const router=express.Router();

const vendorProductModel=require("../models/vendor-product");


router.post("/vendorproduct",function(req,res){
    let data=req.body;

    vendorProductModel.create(data)
    .then(function(info){
        res.send({success:true,message:"product Successfully created"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product  creation problems"});
    })

})

router.put("/vendorproduct/:id",function(req,res){
    let data =req.body;
    let id=req.params.id;

    vendorProductModel.updateOne({_id:id},data)
    .then(function(info){
        res.send({success:true,message:"product Successfully updated"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product update Issues"});
    })
})

router.delete("/vendorproduct/:id",function(req,res){
    let id=req.params.id;

    vendorProductModel.deleteOne({_id:id})
    .then(function(info){
        res.send({success:true,message:"product Successfully deleted"});
    })
    .catch(function(err){
        res.send({success:false,message:"product delete Issues"});
    })

})



module.exports=router;