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
        required:true,
        default:1
    }


},{timestamps:true});

const cartModel=mongoose.model("carts",cartSchema);
module.exports= cartModel