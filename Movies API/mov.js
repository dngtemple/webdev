const fs=require("fs");
const express=require("express");

const app=(express());

app.get("/movies",function(req,res){
    fs.readFile("./movies.json",{encoding:"utf-8"},function(err,movies){
        if(err===null){
            res.send(movies);
        }
    })

});

app.get("/movies/:id",function(req,res){
    let id=req.params.id;

    fs.readFile("./movies.json",{encoding:"utf-8"},function(err,movies){

        let allmovies=JSON.parse(movies);
        if(err===null){
            let movie=allmovies.find(function(movie,index){
                return Number(movie.id)===Number(id);
            });

            res.send(movie);
        }
    })


})


app.listen(8000,function(){
    console.log("Server is running");
})