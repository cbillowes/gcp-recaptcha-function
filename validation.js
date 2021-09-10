/**
 * Generates an error with an associated code.
 * @param {string} message
 * @returns that error
 */
const validationError = (message, code) => {
  const error = new Error(message)
  error.code = code
  return error
}

/**
 * Validates the method for the request.
 * Forbidden if anything other than POST.
 * @param {object} req
 * @param {string} req.method
 */
exports.validateRequestMethod = ({ method }) => {
  if (method !== "POST") {
    throw validationError("Incorrect method invoked.", 403)
  }
}

/**
 * Validates the data provided in the request.
 * @param {object} req
 * @param {object} req.body
 * @param {string} req.body.token
 */
exports.validateData = ({ body }) => {
  if (!body) throw validationError("No data has been provided.", 400)

  const { token } = body
  if (!token) throw validationError("Token is required.", 400)
}
