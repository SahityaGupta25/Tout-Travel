const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Place = require("./models/place.js")



main().then(()=>{
    console.log("Connect to DB");
}).catch(err => console.log(err));

app.get("/",(req,res)=>{
    res.send("Hello , Mathew")
})

app.get("/demoPlace",async(req,res)=>{
    let samplePlace = new Place({
        title:"My New Hotel",
        description:"India is very beautiful",
        price:6600,
        location:"Vrindavan",
        country:"India" 
    })
    await samplePlace.save()
    console.log("Sample was saved");
    res.send("sucessfull testing")
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hotel');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.listen(8080,()=>{
console.log("Hamra server 8080 pe chal raho hain.");
})