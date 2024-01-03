const userModel=require("../models_sch/users.model");

const express=require("express");
const { use } = require("./movies_end");
const app=express();
app.use(express.json());
const router=express.Router();

const bcryptjs=require("bcryptjs");


// endpoint of post and hashing password
router.post("/",function(req,res){

    let user=req.body;

    bcryptjs.genSalt(10,function(err,Salt){
        if(err===null || err===undefined){
            bcryptjs.hash(user.password,Salt,function(err,encryption){
                if(err==null || err===undefined){
                    user.password=encryption;

                    userModel.create(user)
                    .then(function(user){
                        res.send({message:"User Registered"});
                    })
                    .catch(function(err){
                        res.send({message:"Error registering user"});
                    })
                }
            })
        }
    })

 


})


// endpoint of login

router.post("/login",function(req,res){

    let userCredentials=req.body;

    userModel.findOne({username:userCredentials.username})
    .then(function(user){
        if(user!==null || user!==undefined){
            bcryptjs.compare(userCredentials.password,user.password,function(err,result){
                if(err=== null || err=== undefined){
                    if(result){
                        res.send({message:"login successful"});
                    }
                    else{
                        res.send({message:"wrong password"});
                    }
                }
            })
        }

    })
    .catch(function(err){
        console.log(err);
    })
})

module.exports=router;