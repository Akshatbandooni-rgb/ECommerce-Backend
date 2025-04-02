const express = require("express");
const router = express.Router();
const userAuth = require("../../middlewares/userAuth");
const {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  changePassword,
} = require("../../controllers/profile-controller");

router.get("/", userAuth, getUserProfile);
router.put("/", userAuth, updateUserProfile);
router.delete("/", userAuth, deleteUserProfile);
router.put("change-passowrd", userAuth, changePassword);

module.exports = router;
