const validator = require("validator");
const APIError = require("../utils/APIError");
const validateRegisterUser = ({ firstName, lastName, email, password }) => {
  console.log({ firstName, lastName, email, password });
  if (!firstName || !lastName || !email || !password) {
    console.log("All fields are required");
    throw APIError.badRequest("All fields are required");
  }
  if (!validator.isStrongPassword(password)) {
    console.log("Password is strong enough");
    throw APIError.badRequest("Password is not strong enough");
  }
  if (!validator.isEmail(email)) {
    console.log("Invalid email address");
    throw APIError.badRequest("Invalid email address");
  }
  console.log("User data is valid");
};
module.exports = validateRegisterUser;
