const express = require("express");
const router = express.Router();
const userAuth = require("../../middlewares/userAuth");
const authorizeRoles = require("../../middlewares/authorizeRoles");
const {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../../controllers/profile-controller");

router.get("/profile", userAuth, getUserProfile);
router.put("/profile", userAuth, updateUserProfile);
router.delete("/profile", userAuth, deleteUserProfile);

module.exports = router;
