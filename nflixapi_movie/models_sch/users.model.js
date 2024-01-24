const mongoose=require("mongoose");

let userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:[true,"This username Already exists"],
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }
    


},{timestamps:true});

const userModel=mongoose.model("users",userSchema);

module.exports=userModel;