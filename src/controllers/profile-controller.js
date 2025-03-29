const { StatusCodes } = require("http-status-codes");
const APIResponse = require("../utils/apiResponse");
const APIError = require("../utils/apiError");
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
  try {
    if (!req.loggedInUser) {
      return res
        .status(404)
        .json(new APIResponse("❌ User not found!", 404).toJSON());
    }

    await req.loggedInUser.deleteOne();

    res
      .status(200)
      .json(
        new APIResponse("✅ User profile deleted successfully!", 200).toJSON()
      );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
