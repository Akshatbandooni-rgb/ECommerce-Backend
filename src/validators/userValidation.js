const ALLOWED_UPDATE_FIELDS = new Set(["firstName", "lastName"]);

const validateProfileEditData = (data) => {
  const keys = Object.keys(data);
  const invalidFields = keys.filter((key) => !ALLOWED_UPDATE_FIELDS.has(key));

  return {
    isValidUpdate: invalidFields.length === 0,
    invalidFields: invalidFields,
  };
};

module.exports = { validateProfileEditData };
