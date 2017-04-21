const { history } = require('marko-path-router')

module.exports = {
  handleClick: function () {
    history.push('/deep-nested-chart', {
      cobrowse: true
    })
  }
}
