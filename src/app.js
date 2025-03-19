const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

// Load environment variables
if (dotenv.config().error) {
  console.error("Failed to load environment variables from .env file");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(cookieParser()); // Parse cookies in incoming requests
app.use(morgan("dev")); // Log HTTP requests in the console
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

// Connect to the database and start the server
connectDB()
  .then((connectionInstance) => {
    console.log(
      `Connected to the database at ${connectionInstance.connection.host}`
    );
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  });
