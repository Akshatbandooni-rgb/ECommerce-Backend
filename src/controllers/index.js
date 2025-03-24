const registerUser = require("./auth-controller").registerUser;
const loginUser = require("./auth-controller").loginUser;
const logoutUser = require("./auth-controller").logoutUser;

module.exports = { registerUser, loginUser, logoutUser };
