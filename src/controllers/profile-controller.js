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
      throw new APIError(
        StatusCodes.BAD_REQUEST,
        "Invalid fields detected in profile update"
      );
    }

    Object.assign(user, dataToUpdate);
    await user.save();

    const successResponse = new APIResponse(
      "✅ User profile updated successfully!",
      StatusCodes.OK,
      { user }
    ).toJSON();

    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    next(error);
  }
};

const deleteUserProfile = async (req, res, next) => {
  try {
    if (!req.loggedInUser) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json(
          new APIResponse("❌ User not found!", StatusCodes.NOT_FOUND).toJSON()
        );
    }

    await req.loggedInUser.deleteOne();

    res
      .status(StatusCodes.OK)
      .json(
        new APIResponse(
          "✅ User profile deleted successfully!",
          StatusCodes.OK
        ).toJSON()
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
