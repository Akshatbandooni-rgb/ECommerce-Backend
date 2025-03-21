const User = require("../models/user-model");
const validateRegisterUser = require("../validators/registerUser-validation");
const APIResponse = require("../utils/APIResponse");
const { StatusCodes } = require("http-status-codes");
const registerUser = async (req, res, next) => {
  try {
    validateRegisterUser(req.body);
    const { firstName, lastName, email, password } = req.body;
    const UserData = {
      firstName,
      lastName,
      email,
      password,
    };
    const user = new User(UserData);
    await user.save();
    const successResponse = new APIResponse(
      "User registered successfully",
      StatusCodes.CREATED
    );
    return res.status(StatusCodes.CREATED).json(successResponse.toJSON());
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { registerUser };
