const registerUser = require("./auth-controller").registerUser;
const loginUser = require("./auth-controller").loginUser;
const logoutUser = require("./auth-controller").logoutUser;
const getUserProfile = require("./profile-controller").getUserProfile;
const updateUserProfile = require("./profile-controller").updateUserProfile;
const deleteUserProfile = require("./profile-controller").deleteUserProfile;

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
