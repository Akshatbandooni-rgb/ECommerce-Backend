const mongoose = require("mongoose");
const Constants = require("../constants/index");

const MONGO_URI = process.env.MONGO_URI || "";
const DB_NAME = Constants.DB_NAME;

// Connect to MongoDB
const connectDB = async () => {
  if (!MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in environment variables.");
    process.exit(1); // Exit process if MONGO_URI is missing
  }

  try {
    const connection = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
