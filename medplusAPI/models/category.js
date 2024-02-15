const mongoose=require("mongoose");

const categorySchema=mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }

},{timestamps:true});

const categoryModel=mongoose.model("categorys",categorySchema);
module.exports= categoryModel;