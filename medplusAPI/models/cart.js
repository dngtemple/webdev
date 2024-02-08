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


},{timestamps:true});

const cartModel=mongoose.model("cart",cartSchema);
module.exports= cartModel