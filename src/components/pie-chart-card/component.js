module.exports = {
  onMount: function () {
    const input = this.input
    const pieChartEl = this.getEl(input.chartId)

    new Chartist.Pie(pieChartEl, {
      series: [10, 20, 30, 50]
      labels: [1, 2, 3, 4],
    }, {
      showLabel: false,
      donut: true
    })
  }
}
