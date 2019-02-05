module.exports = (app) => {
  app.post('/register', (request, response) => {
    response.send({
      message: `Hello, ${request.body.email}. Your user was registered. Have Fun!`
    })
  })
}
