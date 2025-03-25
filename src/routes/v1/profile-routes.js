const express = require("express");
const router = express.Router();
const userAuth = require("../../middlewares/userAuth");
const {
  getUserProfile,
  updateUserProfile,
} = require("../../controllers/profile-controller");

router.get("/profile", userAuth, getUserProfile);
router.put("/profile", userAuth, updateUserProfile);
router.delete("/profile", userAuth, deleteprofile);

module.exports = router;
