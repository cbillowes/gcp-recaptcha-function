const { endpoint, secret } = require("./variables")

exports.getUrl = (req) => {
  const { token } = req.body
  return `${endpoint}?secret=${secret}&response=${token}`
}
