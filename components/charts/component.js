const { history } = require('marko-component-router')

module.exports = {
  onMount: function () {
    console.log('charts was mounted again')
  },

  handleBeerClick: function () {
    history.push('/beer', {
      cobrowse: true
    })
  },

  handleNestedChartClick: function () {
    history.push('/charts/nested-chart', {
      cobrowse: true
    })
  },

  handleDeepNestedChartClick: function () {
    history.push('/charts/nested-chart/deep-nested-chart', {
      cobrowse: true
    })
  },

  onInput: function (input) {
    console.log('charts input', input.renderBody)
  }
}
