const app = require('~/src/app')

module.exports = {
  onCreate: function (input) {
    // params comes from the router
    const { params } = input
    const userIndex = params.userId

    this.state = { user: app.getUser(userIndex-1) }
  }
}
