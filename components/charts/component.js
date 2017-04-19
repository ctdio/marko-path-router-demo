const Chart = require('chart.js')
const { history } = require('marko-component-router')

module.exports = {
  onMount: function () {
    let pieChartEl = this.getEl('pieChartEl').getContext('2d')
    console.log(pieChartEl)
    const pie = new Chart(pieChartEl, {
      type: "pie",
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [
          {
            data: [3000, 50, 100],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }
        ]
      },
      options: {
        animation:{
          animateScale: true
        }
      }
    })
    console.log(pie)
    pie.render()
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
