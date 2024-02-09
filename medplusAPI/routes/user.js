const express=require("express");
const userModel = require("../models/user");
const router=express.Router();



router.post("/register",function(req,res){
    let data=req.body;
  

    bcryptjs.genSalt(10,function(err,Salt){
        if(err===null){
            bcryptjs.hash(data.password,Salt,function(err,newpassword){
                if(err===null){
                    data.password=newpassword;

                    delete data.role;

                    userModel.create(data)
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

    userModel.findOne({email:credentials.email})
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


// endpoint for updating profile address
router.put("/update/:id",function(req,res){
    let id=req.params.id;
    let data=req.body;

    userModel.updateOne({_id:id},data)
    .then(function(info){
        res.send({success:true,message:"Successfully Updated"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"Problems Updating"});
    })  
})
module.exports=router;