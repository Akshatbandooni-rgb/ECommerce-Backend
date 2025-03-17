class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  // 🔹 Generic Errors
  static badRequest(message = "Bad Request") {
    return new APIError(message, 400);
  }

  static parseError(error) {
    return new APIError(error.message, 400);
  }

  // 🔹 Authentication & Authorization Errors
  static unauthorized(message = "Unauthorized") {
    return new APIError(message, 401);
  }

  static forbidden(message = "Forbidden") {
    return new APIError(message, 403);
  }

  // 🔹 Resource Errors
  static notFound(message = "Not Found") {
    return new APIError(message, 404);
  }

  // 🔹 Server & Rate-Limiting Errors
  static internalServerError(message = "Internal Server Error") {
    return new APIError(message, 500);
  }

  static tooManyRequests(message = "Too Many Requests") {
    return new APIError(message, 429);
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
