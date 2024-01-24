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


router.get("/stream/:filepath",function(req,res){
    const range=req.headers.range;
    const filepath=req.params.filepath;

    if(!range){
        res.send({message:"No range header mentioned"});
    }
 
    const videoSize=fs.statSync(filepath).size;

    const start=Number(range.replace(/\D/g,""));

    const end=Math.min(start+10**6,videoSize-1);

    const contentlength=end-start;

    res.writeHead(206,{
        "Content-Range":`bytes ${start}-${end}/${videoSize}`,
        "Content-Type":"video/mp4",
        "Content-Length":contentlength,
        "Accept-Ranges":"bytes",
    })

    const readStream=fs.createReadStream(filepath,{start,end})

    readStream.on("data",function(chunk){
        res.write(chunk);
    })

})


module.exports=router;
