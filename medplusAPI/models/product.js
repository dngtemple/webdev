const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
        // minLength:50,
        maxLength:500,
    },
    images:{
        type:[String],
        required:true,
    },
    prescription_request:{
        type:Boolean,
        default:false,
        required:true,
    },
    tags:{
        type:[String],
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categorys",
    },
    discount:{
        type:Number,
        required:true,
        default:0
    },
    approved:{
        type:Boolean,
        required:true,
        default:false,
    }

},{timestamps:true});

const productModel=mongoose.model("products",productSchema);
module.exports=productModel;