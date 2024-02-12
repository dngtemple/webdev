const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({

    vendor_product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendor_product"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    quantity:{
        type:Number,
        default:1,
        required:true,
        
    }


},{timestamps:true});

const cartModel=mongoose.model("carts",cartSchema);
module.exports= cartModel