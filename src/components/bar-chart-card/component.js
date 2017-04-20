module.exports = {
  onMount: function () {
    const input = this.input
    const barChartEl = this.getEl(input.chartId)

    new Chartist.Bar(barChartEl, {
      labels: [1, 2, 3, 4],
      series: [[5, 2, 8, 3]]
    });
  }
}
