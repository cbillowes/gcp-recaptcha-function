"use strict"

// https://stackoverflow.com/questions/44277175/how-to-send-a-http-request-from-google-cloud-functions-nodejs
const axios = require("axios")
const { getUrl } = require("./data")
const { validateRequestMethod, validateData } = require("./validation")

/**
 * Responds to an HTTP request from Cloud Tasks and verifies the
 * Recaptcha v3 token from the request body.
 *
 * @param {object} req Cloud Function request context.
 * @param {object} req.body The request payload.
 * @param {string} req.body.token The client side Recaptcha token.
 * @param {object} res Cloud Function response context.
 */
exports.verify = async (req, res) => {
  try {
    validateRequestMethod(req)
    validateData(req)

    const url = getUrl(req)
    axios
      .post(url)
      .then(
        (response) => {
          const { data } = response
          if (data.success) {
            res.status(200).send(data)
          } else {
            res.status(403).send((data["error-codes"] || []).join(", "))
          }
        }
      )
      .catch(() => res.status(500).send("There was a hiccup parsing the request."))
  } catch (error) {
    res.status(500).send(error)
  }
}
