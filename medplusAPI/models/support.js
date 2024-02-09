const mongoose=require("mongoose");

const supportSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});

const supportModel=mongoose.model("supports",supportSchema);

module.exports= supportModel;