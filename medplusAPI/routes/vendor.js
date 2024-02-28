const express=require("express");
const router=express.Router();

const vendorModel = require("../models/vendor");

const bcryptjs=require("bcryptjs");
const jsonwebtoken=require("jsonwebtoken");
const productModel = require("../models/product");


// endpoint to register

router.post("/register",function(req,res){
    let data=req.body;
    

    bcryptjs.genSalt(10,function(err,Salt){
        if(err===null){
            bcryptjs.hash(data.password,Salt,function(err,newpassword){
                if(err===null){
                    data.password=newpassword;


                    vendorModel.create(data)
                    .then(function(){
                        res.send({success:true,message:"Registration Successful"});
                    })
                    .catch(function(err){
                        console.log(err);
                        res.send({success:false,message:"Registration problems"});
                    })
                }
                else{
                    console.log(err);
                    res.send({success:false,message:"Registration problems"});
                }
            })
        }
        else{
            console.log(err);
            res.send({success:false,message:"Registration problems"});
        }
    })

})


// /login
router.post("/login",function(req,res){
    let credentials=req.body
    

    vendorModel.findOne({email:credentials.email})
    .then(function(user){

        delete credentials.role;
        if(user!==null){

            bcryptjs.compare(credentials.password,user.password,function(err,match){

                if(err===null || err===undefined){
                    if(match){
                       
                        jsonwebtoken.sign({email:credentials.email},"secretkey",function(err,token){
                            if(err===null){
                                res.send({success:true,token:token,email:user.email,vendorID:user._id,role:"vendor"});
                            }
                        })
                    }
                    else{
                       res.send({success:false,message:"Wrong Password"});
                    }

                }
                
            })

        }
        else{
            res.send({success:false,message:"User Not Found"});
        }

    })
    .catch(function(err){
       console.log(err);
    })
})


// endpoint to get all vendors

router.get("/get_all_vendors",function(req,res){
    vendorModel.find()
    .then(function(info){
        res.send({success:true,info,message:"All vendors"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"Error getting all vendors"})
    })
})


// endpoint to update vendor
router.put("/update/:vendor_id",function(req,res){
    let data=req.body;
    let vendor_id=req.params.vendor_id;

    vendorModel.updateOne({_id:vendor_id},data)
    .then(function(info){
        res.send({success:true,message:"Vendor Successfully Updated"});
        
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"Problems Updating  vendor"});
    })  
})

// endpoint for vendor to search a product 

router.get("/vendor_search_products/:proname",function(req,res){
    let proname=req.params.proname;

    productModel.find({name:{$regex:proname,$options:"i"},approved:true}).limit(5)
    .then(function(info){
        res.send({success:true,message:"successfully got the data",data:info});
    })
    .catch(function(err){
        res.send({success:false,message:"Cannot get the data"});
    })


})

module.exports=router;