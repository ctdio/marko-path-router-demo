const { history } = require('marko-component-router')

module.exports = {
  handleClick: function () {
    history.push('/deep-nested-chart', {
      cobrowse: true
    })
  }
}
