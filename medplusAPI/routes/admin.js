const express=require("express");
const adminModel = require("../models/admin");
const vendorModel = require("../models/vendor");
const router=express.Router();



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



// endpoint where creates an admin

router.post("/createadmin",function(req,res){
    let data=req.body;
    
    bcryptjs.genSalt(10,function(err,Salt){
        if(err===null){
            bcryptjs.hash(data.password,Salt,function(err,newpassword){
                if(err===null){
                    data.password=newpassword;

                    adminModel.create(data)
                    .then(function(){
                        res.send({success:true,message:"Admin Registration Successful"});
                    })
                    .catch(function(err){
                        console.log(err);
                        res.send({success:false,message:"Admin Registration problems"});
                    })
                }
                else{
                    console.log(err);
                    res.send({success:false,message:"Admin Registration problems"});
                }
            })
        }
        else{
            console.log(err);
            res.send({success:false,message:"Admin Registration problems"});
        }
    })

})

module.exports=router;