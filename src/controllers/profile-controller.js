const { StatusCodes } = require("http-status-codes");
const APIResponse = require("../utils/APIResponse");
const APIError = require("../utils/APIError");
const { validateProfileEditData } = require("../validators/userValidation");

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
    const dataToUpdate = req.body;
    const user = req.loggedInUser;

    if (!validateProfileEditData(dataToUpdate)) {
      throw new APIError(400, "Invalid fields detected in profile update");
    }

    Object.assign(user, dataToUpdate);
    await user.save();

    const successResponse = new APIResponse(
      "✅ User profile updated successfully!",
      200,
      { user }
    ).toJSON();

    res.status(200).json(successResponse);
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
