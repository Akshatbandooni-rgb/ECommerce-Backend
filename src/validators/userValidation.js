const ALLOWED_UPDATE_FIELDS = new Set(["firstName", "lastName"]);

const validateProfileEditData = (data) => {
  return Object.keys(data).every((key) => ALLOWED_UPDATE_FIELDS.has(key));
};

module.exports = { validateProfileEditData };
