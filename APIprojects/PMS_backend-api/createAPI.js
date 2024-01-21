const http=require("http");
const fs=require("fs");
const url=require("url");



http.createServer(function(req,res){

    let parsedUrl=url.parse(req.url,true);
    let products=fs.readFileSync("./products.json",{encoding:"utf-8"});
    let pro=JSON.parse(products);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, PUT");
    res.setHeader("Access-Control-Allow-Headers", "*");


    if (req.method === "OPTIONS" && parsedUrl.pathname==="/products") {
        res.writeHead(200,{
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods":"DELETE,POST,PUT",
            "Access-Control-Allow-Headers":"*"
        });
        res.end();
    }
    else if(req.method==="GET" && parsedUrl.pathname==="/products"){

        let id=parsedUrl.query.id;

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
                res.write(JSON.stringify({message:"Invalid product ID",success:false}));
                res.end();

            }

        }
    }
    else if(req.method==="DELETE" && parsedUrl.pathname==="/products"){

        console.log("delete request coming");
        let id=parsedUrl.query.id;

        let dataTOdelete=pro.findIndex(function(ele,index){
            return Number(ele.id)===Number(id);
        });

        if(dataTOdelete !== -1){
            pro.splice(dataTOdelete,1);

            fs.writeFile("./products.json",JSON.stringify(pro),function(err){
                if(err===null){
                    res.write(JSON.stringify({message:"Product successfully deleted",success:true}));
                    res.end();
                }
                else{
                    res.write(JSON.stringify({message:"Error deleting product",success:false}));
                    res.end();
                }
                
            })
        }
        else{
            res.write(JSON.stringify({message:"Enter Id to delete product",success:false}));
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
                   res.write(JSON.stringify({message:"Product successfully added",success:true}));
                   res.end();
                }
                else{
                    res.write(JSON.stringify({message:"Error adding products",success:false}));
                    res.end();
                }
            })
        });

    }
    else if(req.method === "PUT" && parsedUrl.pathname==="/products"){
        let id=parsedUrl.query.id;


        if(id !== undefined){
            let data="";
            req.on("data",function(chunk){
                data+=chunk;
            })
    
            req.on("end",function(){
                let dataToUpdate=pro.findIndex(function(ele,index){
                    return Number(ele.id)===Number(id);
                })
    
                if(dataToUpdate !== -1){
                    pro[dataToUpdate]=JSON.parse(data);
    
                    fs.writeFile("./products.json",JSON.stringify(pro),function(err){
                        if(err===null){
                            res.write(JSON.stringify({message:"Data updated Successfully", success:true}));
                            res.end();
                        }
                        else{
                            res.write(JSON.stringify({message:"Error Updating Data",success:false}));
                            res.end();
                        }
                    })
                }
                else{
                    res.write(JSON.stringify({message:"Enter A valid ID",success:false}));
                    res.end();
                }
            })

        }
        else{
            res.write(JSON.stringify({message:"There is no ID", success:false}));
            res.end();
        }
       
    }
    

}).listen(8000,function(){
    console.log("Running successfully");
})