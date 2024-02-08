const mongoose=require("mongoose");

const vendorProductSchema=mongoose.Schema({

    vendor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vendor"
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number,
        required:true,
        default:0,
    },
    discount:{
        type:Number,
        default:0,
    }

},{timestamps:true});

const vendorProductModel=mongoose.model("vendor_products",vendorProductSchema);
module.exports= vendorProductModel;