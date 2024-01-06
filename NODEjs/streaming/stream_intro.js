const fs=require("fs");

// using the readstream
const readStream=fs.createReadStream("./data1.txt",{encoding:"utf-8"});

// using the writestream
const writestream=fs.createWriteStream("./data2.txt")

readStream.on("data",function(chunk){
    // writing the chunk i recieve from read file in data1 into data2
    writestream.write(chunk);
    
})

readStream.on("end",function(){
    console.log("file ready");
})