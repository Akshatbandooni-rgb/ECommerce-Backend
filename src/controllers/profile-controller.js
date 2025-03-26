const { StatusCodes } = require("http-status-codes");
const APIResponse = require("../utils/APIResponse");
const getUserProfile = async (req, res, next) => {
  try {
    const user = req.user;
    const successResponse = new APIResponse(user, StatusCodes.OK).toJSON();
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    next(error);
  }
};

const updateUserProfile = async (req, res, next) => {
  try {
    //TODO: Allow user to update only allowed fields
    const user = req.user;
    const { firstName, lastName } = req.body;
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();
    const successResponse = new APIResponse(
      "Profile updated successfully",
      StatusCodes.OK
    ).toJSON();
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    next(error);
  }
};

const deleteUserProfile = async (req, res, next) => {
  //TODO: Delete a User's Profile
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
