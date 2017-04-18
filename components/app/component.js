require('./styles.css')

module.exports = {
  onMount: function () {
    const self = this
    const router = self.getComponent('router')
    self.state.currentRoute = router.currentRoute

    router.on('update', () => {
      console.log('updated')
      self.state.currentRoute = router.currentRoute
    })
  },

  onInput: function (input) {
    console.log(input)
    this.state = {
      currentRoute: input.currentRoute || '',
      showSidebar: true,
      activeItem: input.activeItem
    }
  },

  toggleSidebar: function () {
    var sidebar = this.getComponent('sidebar')
    sidebar.toggle();
  },

  getCurrentRoute: function () {
    let router = this.getComponent('router')
    console.log(router && router.currentRoute)
    return router ? router.currentRoute : ''
  },

  handleItemClick: function (event, el) {
    this.state.activeItem = el.getAttribute('data-key')
    this.update()
  }
}
