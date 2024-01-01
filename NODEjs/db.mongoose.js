const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dummy")
.then(function(msg){
    console.log("Successfully connected");
})
.catch(function(err){
    console.log(err);
})

const teacherSchema=mongoose.Schema({
    name:String,
    dep:String,
    sal:String,
})

const teacherModel=mongoose.model("teachers",teacherSchema);


let data=[
    {
        name:"Efia",
        dep:"Accounting",
        sal:"4589"
    },
    {
        name:"Kofi",
        dep:"Sales",
        sal:"112"
    },
    {
        name:"James",
        dep:"Development",
        sal:"2253"
    }
]

teacherModel.create(data)
.then(function(){
    console.log("Data successfully Added");
})
.catch(function(err){
    console.log("Data couldn't be added")
})