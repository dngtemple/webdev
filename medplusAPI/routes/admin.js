const express=require("express");
const adminModel = require("../models/admin");
const router=express.Router();


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