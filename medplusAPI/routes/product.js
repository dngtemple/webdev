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
            // console.log(files);

            // if(files.image && files.image.filepath){

                let fileData=fs.readFileSync(files.image[0].filepath);
                let ext=files.image[0].originalFilename.split(".")[1].toUpperCase();
        
                let newPath="./products/"+files.image[0].newFilename+"."+ext;
                let imagePath="http://localhost:8000/uploaded/products/"+files.image[0].newFilename+"."+ext;
        
                if(ext==="JPG" || ext ==="JPEG" || ext==="PNG" || ext==="WEBP" || ext==="AVIF"){
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

router.put("/delete_image/:product_id", async function(req,res){
    let product_id=req.params.product_id;
    let data=req.body;

    let product= await productModel.findOne({_id:product_id});
    console.log(product);

    console.log(product.images)

    let images=product.images


    let index=images.findIndex(function(img,index){
        return img===data.image;
    })

    images.splice(index,1);
    product.images=images

    productModel.updateOne({_id:product_id},product)
    .then(function(info){

        let imagesplit=data.image.split("/");
        let imageName=imagesplit[imagesplit.length-1];

        fs.unlinkSync("./products/"+imageName);
        res.send({success:true,message:"Image successfully deleted"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"Image not deleted deleted"});

    })
})






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

// endpoint to find if item is in  cart 
router.get("/singleitem_cart/:product_id/:user_id",function(req,res){

    let pro=req.params.product_id;
    let user=req.params.user_id;

    cartModel.findOne({product:pro,user:user})
    .then(function(info){
        let present=false;
        if(info !== null){
            present=true;
           res.send({success:true,present,message:"product is in cart"})   
 
        }
    })
    .catch(function(err){
        res.send({success:false, message:"Product not found in cart"});
    })

})


// endpoint to get data from cart

router.get("/get_cart_data/:user_id",function(req,res){
   let userID=req.params.user_id;

   cartModel.find({user:userID}).populate("product")
   .then(function(info){
    res.send({success:true,data:info});
   })
   .catch(function(err){
    res.send({success:false,message:"couldn't get cart data"})
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

// endpoint to get all products in user

router.get("/users/products", async function(req,res){
    let product_1={
        title:"Pain and Relief",
        products:[]
    }

    product_1.products = await productModel.find({tags:{$in:["Pain relief","Fever reducer"]}}).limit(5);

    let product_2={
        title:"Antihypertensives",
        products:[]
    }
    product_2.products = await productModel.find({tags:{$in:["Hypertension","Blood pressure"]}}).limit(5);

    let product_3={
        title:"Antidepressants",
        products:[]
    }
    product_3.products = await productModel.find({tags:{$in:["Anxiety","Depression"]}}).limit(5);

    let product_4={
        title:"Bronchodilators",
        products:[]
    }
    product_4.products = await productModel.find({tags:{$in:["Asthma","COPD"]}}).limit(5);


    res.send({success:true,product_1,product_2,product_3,product_4});
})


// endpoint for user searching product
router.get("/user_search_products/:proname",function(req,res){
    let proname=req.params.proname;

    productModel.find(
        {$or:[
            {tags:{$regex:proname,$options:"i"},approved:true},
            {name:{$regex:proname,$options:"i"},approved:true}
        ]}
    ).limit(7)
    .then(function(info){
        res.send({success:true,message:"successfully got the data",data:info});
    })
    .catch(function(err){
        res.send({success:false,message:"Cannot get the data"});
    })


})

module.exports=router;