const { User } = require('../models')
const jsonwebtoken = require('jsonwebtoken')
const config = require('../config/config')

function webtokenSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jsonwebtoken.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()

      res.send({
        user: userJson,
        token: webtokenSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(400).send({
          error: 'The provided login information was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)

      if (!isPasswordValid) {
        return res.status(400).send({
          error: 'The provided login information was incorrect'
        })
      }

      const userJson = user.toJSON()

      res.send({
        user: userJson,
        token: webtokenSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Invalid login information'
      })
    }
  }
}
