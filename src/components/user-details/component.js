const app = require('~/src/app')

module.exports = {
  onCreate: function (input) {
    // params comes from the router
    const { params } = input
    const userIndex = params.userId - 1

    this.state = { user: app.getUsers()[userIndex] }
  }
}
