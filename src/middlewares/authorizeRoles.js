const Constants = require("../constants");
const APIError = require("../utils/APIError");

const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role || Constants.USER_ROLES.USER;
    if (allowedRoles.includes(userRole)) {
      return next();
    } else {
      throw APIError.forbidden(
        "User is not authorized to access this resource"
      );
    }
  };
};

module.exports = authorizeRoles;
