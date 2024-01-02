const express=require("express");
const router=express.Router();

const moviesModel=require("../models_sch/movies.model");


router.post("/",function(req,res){

    moviesModel.create(req.body)
    .then(function(){
        res.send({message:"Movie successfully added to Database"});
    })
    .catch(function(err){
        // res.send({message:"Error adding movie to Database"});
        console.log(err);
    })
})

router.get("/",function(req,res){
    moviesModel.find()
    .then(function(movies){
        res.send(movies);
    })
    .catch(function(err){
        res.send({message:"Error getting all movies"});
    })
})

router.get("/:id",function(req,res){
    let id=req.params.id;
    moviesModel.findOne({_id:id})
    .then(function(movie){
        res.send(movie);
    })
    .catch(function(err){
        res.send({message:"Error getting the movie"});
    })
})


module.exports=router;
