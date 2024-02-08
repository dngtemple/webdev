const express=require("express");
const bcryptjs=require("bcryptjs");
const jsonwebtoken=require("jsonwebtoken");
const router=express.Router();

const adminModel=require("../models/admin");
const vendorModel=require("../models/vendor");
const userModel=require("../models/user");

const verifyToken=require("./verifytoken");

function selectmodel(role){
    if(role==="admin"){
        return adminModel;
    }
    else if(role==="user"){
        return userModel;
    }
    else{
        return vendorModel;
    }
}

router.post("/register",function(req,res){
    let data=req.body;
    let model=selectmodel(data.role);

    bcryptjs.genSalt(10,function(err,Salt){
        if(err===null){
            bcryptjs.hash(data.password,Salt,function(err,newpassword){
                if(err===null){
                    data.password=newpassword;

                    delete data.role;

                    model.create(data)
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
    
    let model=selectmodel(credentials.role);

    model.findOne({email:credentials.email})
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

module.exports=router;

