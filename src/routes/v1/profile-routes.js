const express = require("express");
const router = express.Router();
const userAuth = require("../../middlewares/userAuth");
const authorizeRoles = require("../../middlewares/authorizeRoles");
const {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../../controllers/profile-controller");

router.get("/profile", userAuth, authorizeRoles(["user"]), getUserProfile);
router.put("/profile", userAuth, authorizeRoles(["user"]), updateUserProfile);
router.delete(
  "/profile",
  userAuth,
  authorizeRoles(["user"]),
  deleteUserProfile
);

module.exports = router;
