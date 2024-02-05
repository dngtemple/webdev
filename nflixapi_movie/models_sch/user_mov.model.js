const mongoose=require("mongoose");

const userMoviesSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"movies",
    },
    watchTime:{
        type:Number,
        default:0,
    }
},{timestamps:true})

const userMoviesModel=mongoose.model("users_movies",userMoviesSchema);

module.exports=userMoviesModel;