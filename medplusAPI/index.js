const express=require("express");
const process=require("process");
const PORT=process.env.PORT || 8000;
const app=(express());
const cors=require("cors");
const mongoose=require("mongoose");


// inbuilt middlewares
app.use(express.json());
app.use(cors());

// imported routes
const adminRouter=require("./routes/admin");
const categoryRouter=require("./routes/category");
const productRouter=require("./routes/product");
const supportRouter=require("./routes/support");
const userRouter=require("./routes/user");
const vendorProductRouter=require("./routes/vendor_product");
const vendorRouter=require("./routes/vendor");

mongoose.connect("mongodb://127.0.0.1:27017/medplus")
.then(function(){
    console.log("Database successfully connected");
})


app.use("/admin",adminRouter);
app.use("/category",categoryRouter);
app.use("/product",productRouter);
app.use("/support",supportRouter);
app.use("/user",userRouter);
app.use("/vendorProduct",vendorProductRouter),
app.use("/vendor",vendorRouter);




app.listen(PORT,function(){
    console.log("Server is running successfully");
})