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
        minLength:100,
        maxLength:250,
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
        ref:"category",
    }

},{timestamps:true});

const productModel=mongoose.model("product",productSchema);
export default productModel;