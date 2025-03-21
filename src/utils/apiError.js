const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  // 🔹 Generic Errors
  static badRequest(message = "Bad Request") {
    return new APIError(message, StatusCodes.BAD_REQUEST);
  }

  static parseError(error) {
    return new APIError(error.message, StatusCodes.BAD_REQUEST);
  }

  // 🔹 Authentication & Authorization Errors
  static unauthorized(message = "Unauthorized") {
    return new APIError(message, StatusCodes.UNAUTHORIZED);
  }

  static forbidden(message = "Forbidden") {
    return new APIError(message, StatusCodes.FORBIDDEN);
  }

  // 🔹 Resource Errors
  static notFound(message = "Not Found") {
    return new APIError(message, StatusCodes.NOT_FOUND);
  }

  // 🔹 Server & Rate-Limiting Errors
  static internalServerError(message = "Internal Server Error") {
    return new APIError(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }

  static tooManyRequests(message = "Too Many Requests") {
    return new APIError(message, StatusCodes.TOO_MANY_REQUESTS);
  }

  // 🔹 Convert Error to JSON
  toJSON() {
    return {
      success: false,
      message: this.message,
      statusCode: this.statusCode,
      timestamp: new Date().toISOString(),
      stackTrace:
        process.env.NODE_ENV !== "production" ? this.stack : undefined,
    };
  }
}

module.exports = APIError;
