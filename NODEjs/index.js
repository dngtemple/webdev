const fls=require("fs");

// readFileSync is synchronous
// let data =fls.readFileSync("./demo.txt",{encoding:"utf-8"});
// console.log(data);



// readFile is async

// fls.readFile("./demo.txt",{encoding:"utf-8"},function(err,data){
//     if (err===null){
//         console.log(data);
//     }
//     else{
//         console.log("There were some error");
//     }
// })


// use to append text and its sync
// fls.appendFileSync("./demo.txt","learn it harder");



// this is async
// fls.appendFile("./demo.txt"," and harder",function(err){
//     if(err===null){
//         console.log("successful");
//     }
//     else{
//         console.log("failure");
//     }
// })

// this is used to overwrite text in a file and its sync
// fls.writeFileSync("./demo.txt","Learn Node very well");



// this is async 
// fls.writeFile("./demo.txt","Node is very important",function(err){
//     if(err===null){
//         console.log("success");
//     }
//     else{
//         console.log("failure");
//     }
// })


// fls.unlinkSync("./demo.txt");



fls.unlink("./test.js",function(err){
    if(err===null){
        console.log("success");
    }
    else{
        console.log("failure");
    }
})

