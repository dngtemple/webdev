const fs=require("fs");
const express=require("express");
const app=express();

const cors=require("cors");
app.use(cors());


app.get("/video",function(req,res){
    const range=req.headers.range;

    if(!range){
        res.send({message:"No range header mentioned"});
    }
 
    const videoSize=fs.statSync("./video.mp4").size;

    const start=Number(range.replace(/\D/g,""));

    const end=Math.min(start+10**6,videoSize-1);

    const contentlength=end-start;

    res.writeHead(206,{
        "Content-Range":`bytes ${start}-${end}/${videoSize}`,
        "Content-Type":"video/mp4",
        "Content-Length":contentlength,
        "Accept-Ranges":"bytes",
    })

    const readStream=fs.createReadStream("./video.mp4",{start,end})

    readStream.on("data",function(chunk){
        res.write(chunk);
    })

})


app.listen(8000,function(){
    console.log("Server connected");
})