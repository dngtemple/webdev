const http=require("http");
const fs=require("fs");

http.createServer(function(req,res){

    if(req.method==="GET" && req.url==="/products"){
        let data= fs.readFileSync("./products.json",{encoding:"utf-8"});
        res.write(data);
    }
    else if(req.method==="POST"){
        res.write("This is post");
    }
    else if(req.method==="DELETE"){
        res.write("This is delete method");
    }

    res.end();

  

}).listen(8000,function(){
    console.log("The server is running");
})