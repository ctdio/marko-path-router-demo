module.exports = {
  onCreate: function () {
    this.state = {
      animate: false
    }
  },

  onMount: function () {
    this.state.animate = true
  }
}
