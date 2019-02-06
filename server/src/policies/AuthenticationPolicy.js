const Joi = require('joi')

module.exports = {
  validateLoginRegister (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9!@#$%^&]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'The password must have at least 1 lowercase and 1 uppercase character, 1 numeric character and 1 special character. Also it must have between 8 and 32 characters in length'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  },
  validateRegister (req, res, next) {
    const passwordRegex = '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{6,16}$'
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp(passwordRegex)),
      passwordConfirmation: Joi.string().regex(new RegExp(passwordRegex)),
      terms: Joi.boolean().truthy('Y')
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'The password must contain at least 1 letter, 1 numeric character, 1 special character and between 6 and 16 characters in length'
          })
          break
        case 'passwordConfirmation':
          res.status(400).send({
            error: 'The password confirmation must contain at least 1 letter, 1 numeric character, 1 special character and between 6 and 16 characters in length'
          })
          break
        case 'terms':
          res.status(400).send({
            error: 'You must read and agree to the terms and conditions'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      if (req.body.password !== req.body.passwordConfirmation) {
        res.status(400).send({
          error: 'The password and the password confirmation must match'
        })
      } else {
        next()
      }
    }
  }
}
