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
    },
    genres:{
        type:String,
        required:true,
    },
    imdbRating:{
        type:Number,
        required:true,

    },
    posterURL:{
        type:String,
        required:true,
    },
},{timestamps:true});

const moviesModel=mongoose.model("movies",moviesSchema);

module.exports=moviesModel;