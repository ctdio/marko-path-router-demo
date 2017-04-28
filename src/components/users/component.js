const app = require('src/app')

module.exports = {
  onCreate: function () {
    this.state = { users: app.getUsers() }
  }
}
