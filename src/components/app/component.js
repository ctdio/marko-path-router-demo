const homeComponent = require('../home')
const beerComponent = require('../beer')
const chartsComponent = require('../charts')
const nestedChartComponent = require('../nested-chart')
const deepNestedChartComponent = require('../deep-nested-chart')

module.exports = {
  onCreate: function () {
    this.routes = [
      { path: '/', component: homeComponent },
      { path: '/beer', component: beerComponent },
      { path: '/deep-nested-chart', component: deepNestedChartComponent },
      {
        path: '/charts',
        component: chartsComponent,
        nestedRoutes: [
          {
            path: '/nested-chart',
            component: nestedChartComponent,
            nestedRoutes: [
              { path: '/deep-nested-chart', component: deepNestedChartComponent }
            ]
          }
        ]
      }
    ]
  },

  onMount: function () {
    const self = this
    const router = self.getComponent('router')
    self.state.currentRoute = router.currentRoute

    router.on('update', () => {
      self.state.currentRoute = router.currentRoute
    })
  },

  onInput: function (input) {
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
    return router ? router.currentRoute : ''
  },

  handleItemClick: function (event, el) {
    this.state.activeItem = el.getAttribute('data-key')
    this.update()
  }
}
