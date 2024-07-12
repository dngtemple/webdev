// const  express=require("express");
// const apollo=require("@apollo/server")
// const standalone=require("@apollo/server/standalone")
const mongoose=require("mongoose");

// const app=(express());






// DATABASE CONNECTION

mongoose.connect("mongodb://localhost:27017/graphQL")
.then(function(){
    console.log("database up an running");

})

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    }
},{timestamps:true})

const userModel=mongoose.model("users",userSchema);



// const  typeDefs=`#graphql

//   type Query {

//   }

//   type Mutation {
//   }


// `

// const resolvers={
//     Query :{

//     },

//     Mutation :{

//     }
// }


// async function startserver(){

//     const server = new apollo({
//         typeDefs,
//         resolvers,
//     });

//     const { url } = await standalone(server, {
//         listen: { port: 8000 },
//     });

//     console.log(`server ready at ${url}`);
// }
// startserver()


// // SERVER CONNECTION
// app.listen(8000,function(){
//     console.log("server up and running");
// })

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { gql } = require('graphql-tag');

// Define your schema
const typeDefs = gql`

  type user{
   id:ID,
   name:String,
   age:Int,
   address:String
  }

  type Query {
    users:[user]
    
  }

`;

// Define your resolvers
const resolvers = {
  Query: {

    users:function(){
        return userModel.find()
        .then(function(data){
            return data
        })
        .catch(function(err){
            return err
        })
    }
   
  },

};

// Create an instance of Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});
