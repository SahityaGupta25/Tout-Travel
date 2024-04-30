const express = require("express")
const app = express()
const mongoose = require("mongoose")


main().then(()=>{
    console.log("Connect to DB");
}).catch(err => console.log(err));

app.get("/",(req,res)=>{
    res.send("Hello , Mathew")
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.listen(8080,()=>{
console.log("Hamra server 8080 pe chal raho hain.");
})