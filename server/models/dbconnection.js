const mongoose = require("mongoose")

const dbConnection = ()=>{
    mongoose.connect(process.env.CONNECTION)
    .then(()=>console.log("Connected"))
    .catch((e)=>console.log(e.message))
}

module.exports = dbConnection