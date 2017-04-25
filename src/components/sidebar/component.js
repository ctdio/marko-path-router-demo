module.exports = {
  onCreate: function () {
    const revealSidebar = window.localStorage.getItem('revealSidebar')
    this.state = {
      reveal: revealSidebar === 'true'
    }
  },

  onInput: function (input) {
    this.state = {
      floating: input.floating,
      reveal: input.reveal || this.state && this.state.reveal,
      width: input.width,
      rightSide: input.rightSide,
      showOverlay: true,

      // custom html
      header: input.header,
      body: input.body,
      footer: input.footer
    }
  },

  toggle: function () {
    this.setState('reveal', !this.state.reveal)
    window.localStorage.setItem('revealSidebar', this.state.reveal)
    console.log(JSON.stringify(this.state.reveal))
  }
}
