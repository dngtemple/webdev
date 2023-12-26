const http=require("http");

http.createServer(function(req,res){

    console.log(req.method);

    res.write("Your response is working now");
    res.end();

}).listen(8000,function(){
    console.log("The server is running");
})