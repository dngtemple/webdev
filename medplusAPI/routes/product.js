const express=require("express");
const router=express();

const productModel=require("../models/product");
const cartModel=require("../models/cart");

// endpoint to get all products
router.get("/allproducts",function(req,res){
    productModel.find()
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
    let product=req.body;

    if(product.publish!==undefined && product.publish===true){
        product.approved=true;
    }

    productModel.create(product)
    .then(function(info){
        res.send({success:true,message:"product Successfully created"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product  creation problems"});
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