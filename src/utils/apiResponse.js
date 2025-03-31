class ApiResponse {
  constructor(message, statusCode, data = null) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  toJSON() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      success: true,
      ...(this.data && { data: this.data }),
    };
  }
}

module.exports = ApiResponse;
