const userModel=require("../models_sch/users.model");

const express=require("express");
const app=express();
app.use(express.json());
const router=express.Router();

const bcryptjs=require("bcryptjs");
const jsonwebtoken=require("jsonwebtoken");


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

                        // username:userCredentials.user----this is something unique of the user
                            // since they are login in username is best

                        jsonwebtoken.sign({username:userCredentials.user},"secretkey",function(err,token){
                            if(err===null || err===undefined){
                                res.send({success:true,token:token});
                            }
                        })

                        // res.send({message:"login successful"});
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


router.get("/something",verify,function(req,res){

    res.send({message:"I am the most secured endpoint"});
})


// middleware to vertify token
function verify(req,res,next){

    if(req.headers.authorization !==undefined){

        let token=req.headers.authorization.split(" ")[1];

        jsonwebtoken.verify(token,"secretkey",function(err,data){
            if(err===null || err===undefined){
                next();
            }
            else{
                res.send({message:"Invalid token"});
            }
        })

    }
    else{
        res.send({message:"Please add token"});
    }
}

module.exports=router;