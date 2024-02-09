const mongoose=require("mongoose");

const vendorSchema=mongoose.Schema({
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
    },
    company_name:{
        type:String,
        required:true,
        unique:true,
    },
    company_address:{
        type:String,
        required:true,
    },
    pan_number:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true
    },
    approved:{
        type:Boolean,
        required:true,
        default:false,
    },
    blocked:{
        type:Object,
        required:true,
        default:{
            block:false,
            ts:Date.now
        },
    }


},{timestamps:true});

const vendorModel=mongoose.model("vendors",vendorSchema);
module.exports= vendorModel;