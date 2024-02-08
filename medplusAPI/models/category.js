const mongoose=require("mongoose");

const categorySchema=mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        minLength:100,
        maxLength:250,
    }

},{timestamps:true});

const categoryModel=mongoose.model("category",categorySchema);
module.exports= categoryModel;