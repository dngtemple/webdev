const express=require("express");
const app=(express());
app.use(express.json());

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dummy")
.then(function(msg){
    console.log("Database successfull connected");
})
.catch(function(err){
    console.log("Error connecting to database");
})

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


app.post("/movies",function(req,res){

    moviesModel.create(req.body)
    .then(function(){
        res.send({message:"Movie successfully added to Database"});
    })
    .catch(function(err){
        // res.send({message:"Error adding movie to Database"});
        console.log(err);
    })
})

app.get("/movies",function(req,res){
    moviesModel.find()
    .then(function(movies){
        res.send(movies);
    })
    .catch(function(err){
        res.send({message:"Error getting all movies"});
    })
})

app.get("/movies/:id",function(req,res){
    let id=req.params.id;
    moviesModel.findOne({_id:id})
    .then(function(movie){
        res.send(movie);
    })
    .catch(function(err){
        res.send({message:"Error getting the movie"});
    })
})


app.listen(8000,function(){
    console.log("Server connected");
})