const mongoose = require('mongoose')
const ConnectToMongo = async() => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected Successfully"))
    .catch((e)=>console.log(e.message))
}

module.exports = ConnectToMongo;