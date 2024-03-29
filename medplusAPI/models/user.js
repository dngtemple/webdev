const mongoose=require("mongoose");

const userSchema=mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },
    contact:{
        type:String,
        required:true,
        unique:true,
    },
    profile_pic:{
        type:String,
        default:"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
        required:true,
    },
    address:{
        type:[String],
        required:true,
    },
    blocked:{
        type:Object,
        required:true,
        default:{
            block:false,
            ts:Date.now()
        }

    },
    precription:[
        {
            filePath:{
                type:String,
            },
            date:{
                type:Date,
                default:Date.now(),
            },
            acknowledged:{
                type:Boolean,
                default:false
            }
        }
    ]

},{timestamps:true});

const userModel=mongoose.model("users",userSchema);
module.exports= userModel;