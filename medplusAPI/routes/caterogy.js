const express=require("express");
const router=express();

const caterogyModel=require("../models/category");

// endpoint to get all category
router.get("/allcategory",function(req,res){
    caterogyModel.find()
    .then(function(data){
        res.send({success:true,data:data});
    })
    .catch(function(err){
        res.send({success:false,message:"Error getting all products"})
    })
})

// endpoint to get one category

router.get("/category/:category_id",function(req,res){
    
    let category_id=req.params.category_id;

    caterogyModel.findOne({_id:category_id})
    .then(function(data){
        res.send({success:true,data:data});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"Error getting the product"})

    })
})


// endpoint to create category

router.post("/create_category",function(req,res){
    let category=req.body;

    caterogyModel.create(category)
    .then(function(info){
        res.send({success:true,message:"product Successfully created"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product  creation problems"});
    })

})

// endpoint to update a category

router.put("/category_update/:category_id",function(req,res){
    let category=req.body;
    let category_id=req.params.category_id;

    caterogyModel.updateOne({_id:category_id},category)
    .then(function(info){
        res.send({success:true,message:"product Successfully updated"});
    })
    .catch(function(err){
        console.log(err);
        res.send({success:false,message:"product update Issues"});
    })

})

// endpoint to delete a category

router.delete("/category_delete/:category_id",function(req,res){
    let category_id=req.params.category_id;

    caterogyModel.deleteOne({_id:category_id})
    .then(function(info){
        res.send({success:true,message:"product Successfully deleted"});
    })
    .catch(function(err){
        res.send({success:false,message:"product delete Issues"});
    })
})


module.exports=router;