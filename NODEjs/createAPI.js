const http=require("http");
const fs=require("fs");
const url=require("url");


http.createServer(function(req,res){

    let parsedUrl=url.parse(req.url,true);
    let products=fs.readFileSync("./products.json",{encoding:"utf-8"});
    let id=parsedUrl.query.id;
    let pro=JSON.parse(products);



    // console.log(parsedUrl);
    if(req.method==="GET" && parsedUrl.pathname==="/products"){


        if(id===undefined){
            res.write(products);
            res.end();
        }
        else{

            let product=pro.find(function(prod,index){
                return Number(prod.id)===Number(id);
            })
            if(product!==undefined){
                res.write(JSON.stringify(product));
                res.end();
                 
            }
            else{
                res.write(JSON.stringify({message:"Invalid product ID"}));
                res.end();

            }

        }
    }
    else if(req.method==="DELETE" && parsedUrl.pathname==="/products"){


        let dataTOdelete=pro.findIndex(function(ele,index){
            return Number(ele.id)===Number(id);
        });

        if(dataTOdelete !== -1){
            pro.splice(dataTOdelete,1);

            fs.writeFile("./products.json",JSON.stringify(pro),function(err){
                if(err===null){
                    res.write(JSON.stringify({message:"Product successfully deleted"}));
                    res.end();
                }
                else{
                    res.write(JSON.stringify({message:"Error deleting product"}));
                    res.end();
                }
                
            })
        }
        else{
            res.write(JSON.stringify({message:"Enter Id to delete product"}));
            res.end();
        }

    }
    else if(req.method==="POST" && parsedUrl.pathname==="/products"){
        let data="";
        req.on("data",function(chunk){
            data+=chunk;

        })
        req.on("end",function(){

            pro.push(JSON.parse(data));

            fs.writeFile("./products.json",JSON.stringify(pro),function(err){
                if(err===null){
                   res.write(JSON.stringify({message:"Product successfully added"}));
                   res.end();
                }
                else{
                    res.write(JSON.stringify({message:"Error adding products"}));
                    res.end();
                }
            })
        });

    }

}).listen(8000,function(){
    console.log("Running successfully");
})