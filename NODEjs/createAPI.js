const http=require("http");
const fs=require("fs");
const url=require("url");

http.createServer(function(req,res){

    let parsedUrl=url.parse(req.url,true);
    // console.log(parsedUrl);
    if(req.method==="GET" && parsedUrl.pathname==="/products"){

        let products=fs.readFileSync("./products.json",{encoding:"utf-8"});

        let id=parsedUrl.query.id;
        if(id===undefined){
            res.write(products);
        }
        else{

            let pro=JSON.parse(products);
            let product=pro.find(function(prod,index){
                return Number(prod.id)===Number(id);
            })
            if(product!==undefined){
                res.write(JSON.stringify(product));
            }
            else{
                res.write(JSON.stringify({message:"Invalid product ID"}));
            }

        }
    }
    res.end();

  

}).listen(8000,function(){
    console.log("Running successfully");
})