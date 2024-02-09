const express=require("express");
const router=express.Router();

const vendorModel = require("../models/vendor");


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
                                res.send({success:true,token:token,email:user.email,userID:user._id});
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

module.exports=router;