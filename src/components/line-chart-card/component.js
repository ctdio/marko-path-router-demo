module.exports = {
  onMount: function () {
    const input = this.input
    const chartEl = this.getEl(input.chartId)

    new Chartist.Line(chartEl, {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    }, {
      showArea: true,
      fullWidth: true
    })
  }
}
