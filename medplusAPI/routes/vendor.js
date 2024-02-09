const express=require("express");
const router=express.Router();

const vendorModel = require("../models/vendor");

// endpoint to update vendor
router.put("/update/:vendor_id",function(req,res){
    let data=req.body;
    let vendor_id=req.params.vendor_id;

    vendorModel.updateOne({_id:vendor_id},data)
    .then(function(info){
        res.send({success:false,message:"Vendor Successfully Updated"});
        
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"Problems Updating  vendor"});
    })  
})

module.exports=router;