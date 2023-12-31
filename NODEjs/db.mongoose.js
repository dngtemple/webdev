const mongoose=require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/dummy')
.then(function(msg){
    console.log("connection successfull");
})
.catch(function(err){
    console.log("error connecting",err)
})


const teacherSchema=mongoose.Schema({
    name:String,
    dep:String,
    sal:String
})
    
const teacherModel=mongoose.model("teachers",teacherSchema);

let data={
    name:"Efo",
    dep:"Accounting",
    sal:"4440"
}

teacherModel.create(data)
.then(function(msg){
    console.log("successfully",msg)
})
.catch(function(err){
    console.log(err);
})