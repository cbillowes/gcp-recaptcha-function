require('dotenv').config()

module.exports = {
  secret: process.env.SECRET,
  endpoint: process.env.ENDPOINT,
}
