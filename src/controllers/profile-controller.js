const { StatusCodes } = require("http-status-codes");
const APIResponse = require("../utils/apiResponse");
const APIError = require("../utils/APIError");
const { validateProfileEditData } = require("../validators/userValidation");
const User = require("../models/user-model");

const getUserProfile = async (req, res, next) => {
  try {
    const user = req.user;
    const successResponse = new APIResponse(
      "User Details Fetched Successfully",
      StatusCodes.OK,
      user
    ).toJSON();
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    next(error);
  }
};

const updateUserProfile = async (req, res, next) => {
  try {
    const dataToUpdate = req.body;
    const { isValidUpdate, invalidFields } =
      validateProfileEditData(dataToUpdate);
    if (!isValidUpdate) {
      const errMsg = `User cannot update the following fields: ${invalidFields.join(
        ", "
      )}`;
      throw new APIError(StatusCodes.BAD_REQUEST, errMsg);
    }
    const userId = req.user._id;
    const updatedUser = await User.findByIdAndUpdate(userId, dataToUpdate, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser) {
      throw new APIError(StatusCodes.NOT_FOUND, "User not found");
    }
    const successResponse = new APIResponse(
      "User profile updated successfully",
      StatusCodes.OK,
      updatedUser
    ).toJSON();

    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    next(error);
  }
};

const deleteUserProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      throw new APIError(StatusCodes.NOT_FOUND, "User not found");
    }

    const successResponse = new APIResponse(
      "User profile deleted successfully",
      StatusCodes.OK
    ).toJSON();

    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user._id;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  changePassword,
};
