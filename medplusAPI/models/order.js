const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({

    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"vendor_product"
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    delivery_address:{
        type:String,
        required:true
    }
},{timestamps:true});

const orderModel=mongoose.model("orders",orderSchema);
module.exports= orderModel;