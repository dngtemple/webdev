const express=require("express");
const app=express();
const formidable=require("formidable")
const fs=require("fs");

const cors=require("cors");
app.use(cors());

app.use(express.json());

app.post("/uploading",function(req,res){

    const form= new formidable.IncomingForm();

    form.parse(req,function(err,fields,files){

        console.log(fields);
        console.log(files);
        
        let tempdata=fs.readFileSync(files.image.filepath);
        let ext=files.image.orignalFilename.split(".")[1];
        let newpath="./uploads"+files.image.newFilename+"."+ext;
        fs.writeFileSync(newpath,tempdata);
    })
    res.send({message:"File upload working"});
    
})

app.listen(8000,function(){
    console.log("Server is running");
})


