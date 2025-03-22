const validator = require("validator");
const APIError = require("../utils/APIError");
const validateRegisterUser = ({ firstName, lastName, email, password }) => {
  if (!firstName || !lastName || !email || !password) {
    throw APIError.badRequest("All fields are required");
  }
  if (!validator.isStrongPassword(password)) {
    throw APIError.badRequest("Password is not strong enough");
  }
  if (!validator.isEmail(email)) {
    throw APIError.badRequest("Invalid email address");
  }
};
const validateLoginUser = ({ email, password }) => {
  if (!email || !password) {
    throw APIError.badRequest("All fields are required");
  }
  if (!validator.isEmail(email)) {
    throw APIError.badRequest("Invalid email address");
  }
};
module.exports = { validateRegisterUser, validateLoginUser };
