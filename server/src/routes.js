const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationPolicy.validateLoginRegister,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationPolicy.validateLoginRegister,
    AuthenticationController.login)
}
