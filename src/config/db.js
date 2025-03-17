const mongoose = require('mongoose');
const Constants=require('../constants/index')
const MONGO_URI = process.env.MONGO_URI||'';
const DB_NAME = Constants.DB_NAME;
// Connect to MongoDB
const connectDB=async ()=>{
    return  await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
}

module.exports = connectDB;