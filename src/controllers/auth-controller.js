const { StatusCodes } = require("http-status-codes");
const User = require("../models/user-model");
const {
  validateRegisterUser,
  validateLoginUser,
} = require("../validators/authValidation");
const APIResponse = require("../utils/APIResponse");
const APIError = require("../utils/APIError");
const Constants = require("../constants");

const registerUser = async (req, res, next) => {
  try {
    // Validate user input
    validateRegisterUser(req.body);

    const { firstName, lastName, email, password } = req.body;

    // Check if the user already exists
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw APIError.badRequest("Email is already registered");
    }

    // Create a new user
    const user = new User({ firstName, lastName, email, password });
    await user.save();

    // Send success response
    const successResponse = new APIResponse(
      "User registered successfully",
      StatusCodes.CREATED
    );
    return res.status(StatusCodes.CREATED).json(successResponse.toJSON());
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    validateLoginUser(req.body);
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      throw APIError.badRequest("User wih this email does not exist");
    }
    const isPasswordValid = await existingUser.comparePassword(password);
    if (!isPasswordValid) {
      throw APIError.unauthorized(" Invalid Credentials");
    }
    const authToken = existingUser.generateAuthToken();
    res.cookie(Constants.COKKIE_TOKEN_NAME, authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    const successResponse = new APIResponse(
      `Welcome ${existingUser.firstName} ${existingUser.lastName}`,
      StatusCodes.OK
    ).toJSON();
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser };
