const mongoose=require("mongoose");


const moviesSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:Date,
        required:true,
    },
    runtime:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
        minlength:50,
        maxlenght:200,
    },
    genres:{
        type:String,
        required:true,
    },
    imdbRating:{
        type:Number,
        required:true,
        min:1,
        max:10,
    },
    posterUrl:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:true});

const moviesModel=mongoose.model("movies",moviesSchema);

module.exports=moviesModel;