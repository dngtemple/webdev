const express=require("express");
const router=express();

const fs=require("fs");
const formidable=require("formidable");

const productModel=require("../models/product");
const cartModel=require("../models/cart");
const categoryModel = require("../models/category");

// endpoint to get all products
router.get("/allproducts",function(req,res){
    productModel.find().populate('category')
    .then(function(data){
        res.send({success:true,data:data});
    })
    .catch(function(err){
        res.send({success:false,message:"Error getting all products"})
    })
})

// endpoint to get one product

router.get("/product/:product_id",function(req,res){
    
    let product_id=req.params.product_id;

    productModel.findOne({_id:product_id})
    .then(function(data){
        res.send({success:true,data:data});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"Error getting the product"})

    })
})


// endpoint to create products

router.post("/create_product",function(req,res){

    let product={images:[]};

    const form= new formidable.IncomingForm();

    form.parse(req);

    form.addListener("field",function(property,value){
        product[property]=value;
    })
       
    form.addListener("file",function(property,file){

        // console.log(file);

        let fileData=fs.readFileSync(file.filepath);
        let ext=file.originalFilename.split(".")[1].toUpperCase();

        let newPath="./products/"+file.newFilename+"."+ext;
        let imagePath="http://localhost:8000/uploaded/products/"+file.newFilename+"."+ext;

        if(ext==="JPG" || ext ==="JPEG" || ext==="PNG" || ext==="WEBP"){
            fs.writeFileSync(newPath,fileData);
            product.images.push(imagePath);
        }

       
    })

    form.on("end",function(){

        product.tags=product.tags.split(",");
        // console.log(product);

        productModel.create(product)
        .then(function(info){
           res.send({success:true,message:"Product created successfully"});
        })
        .catch(function(err){
            console.log(err)
            res.send({success:true,message:"Error creating Product"});
        })

    })


})

// endpoint to update an image

router.put("/update_image/:product_id",function(req,res){
    const form=new formidable.IncomingForm();

    let product_id=req.params.product_id;

    let product=null;

    productModel.findOne({_id:product_id})
    .then(function(data){
        product=data;
    })
    .catch(function(err){
        console.log(err);
    })

    form.parse(req,function(err,fields,files){
        if(err===null){
            console.log(files);

            // if(files.image && files.image.filepath){

                let fileData=fs.readFileSync(files.image[0].filepath);
                let ext=files.image[0].originalFilename.split(".")[1].toUpperCase();
        
                let newPath="./products/"+files.image[0].newFilename+"."+ext;
                let imagePath="http://localhost:8000/uploaded/products/"+files.image[0].newFilename+"."+ext;
        
                if(ext==="JPG" || ext ==="JPEG" || ext==="PNG" || ext==="WEBP"){
                    fs.writeFileSync(newPath,fileData);
                    product.images.push(imagePath);
    
                    productModel.updateOne({_id:product_id},product)
                    .then(function(data){
                        res.send({success:true,image:imagePath,message:"Image Updated Successfully"});
                    })
                    .catch(function(err){
                        console.log(err);
                        res.send({success:false,message:"Unsuccessful Image update"})
                    })
                } 

            // }
            // else{
            //     res.send({success:false,message:"Invalid  Image file"});
            // }
            
            
        }
    })
})


// endpoint to delete an image

// endpoint to update a product

router.put("/product_update/:product_id",function(req,res){
    let product=req.body;
    let product_id=req.params.product_id;

    productModel.updateOne({_id:product_id},product)
    .then(function(info){
        res.send({success:true,message:"product Successfully updated"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product update Issues"});
    })

})

// endpoint to delete a product

router.delete("/product_delete/:product_id",function(req,res){
    let product_id=req.params.product_id;

    productModel.deleteOne({_id:product_id})
    .then(function(info){
        res.send({success:true,message:"product Successfully deleted"});
    })
    .catch(function(err){
        res.send({success:false,message:"product delete Issues"});
    })
})


// endpoint for adding to cart

router.post("/cart",function(req,res){
    let data=req.body;

    cartModel.create(data)
    .then(function(info){
        res.send({success:true,message:"product Successfully created"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product  creation problems"});
    })
})


// endpoint for removing from cart

router.put("/cart:id",function(req,res){
    let data=req.body;
    let id=req.params.id;

    cartModelModel.updateOne({_id:id},data)
    .then(function(info){
        res.send({success:true,message:"product Successfully updated"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product update Issues"});
    })

})

module.exports=router;