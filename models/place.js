const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        default:"https://images.unsplash.com/photo-1714224806668-9d8dc105f71e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D",
        type:String
    },
    price:Number,
    location:String,
    country:String
})

const Place = mongoose.model("Place",placeSchema)
module.exports = Place