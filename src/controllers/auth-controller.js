const { StatusCodes } = require("http-status-codes");
const User = require("../models/user-model");
const validateRegisterUser = require("../validators/registerUser-validation");
const APIResponse = require("../utils/APIResponse");
const APIError = require("../utils/APIError");

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

module.exports = { registerUser };
