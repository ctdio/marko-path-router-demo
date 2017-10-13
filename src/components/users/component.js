const app = require('../../app')

module.exports = {
  onCreate: function () {
    this.state = { users: app.getUsers() }
  }
}
