const jsonwebtoken=require("jsonwebtoken");

function verifyToken(req,res,next){
    if(req.headers.authorization!==undefined){

        let token=req.headers.authorization.split(" ")[1];

        jsonwebtoken.verify(token,"secretkey",function(err,result){
            if(err===null){
                next();
            }
            else{
                res.send({message:"Invalid Token"});
            }
        })

    }
    else{
        res.send({message:"Please add token"});
    }

}
module.exports=verifyToken;
