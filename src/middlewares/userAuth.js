const Constants = require("../constants");
const User = require("../models/user-model");
const APIError = require("../utils/APIError");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies[Constants.COKKIE_TOKEN_NAME];
    if (!token) {
      throw APIError.unauthorized("You need to login to access this resource");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id: userId } = decoded;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      throw APIError.unauthorized("Invalid token");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = userAuth;
