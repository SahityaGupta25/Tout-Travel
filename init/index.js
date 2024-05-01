const mongoose = require("mongoose")
const initData = require("./data")
const place = require("../models/place")


main().then(()=>{
    console.log("Connect to DB");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hotel');
}

const initDB = async()=>{
    await place.deleteMany({})
    await place.insertMany(initData.data)
    console.log("Data was initiliazed");
}

initDB();