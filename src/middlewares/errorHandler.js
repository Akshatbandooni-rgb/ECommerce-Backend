const APIError = require("../utils/APIError");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const errorHandler = (error, req, res, next) => {
  if (error instanceof APIError) {
    return res.status(error.statusCode).json(error.toJSON());
  }
  const err = APIError.internalServerError(ReasonPhrases.INTERNAL_SERVER_ERROR);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err.toJSON());
};
module.exports = errorHandler;
