const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationPolicy.validateRegister,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationPolicy.validateLogin,
    AuthenticationController.login)
}
