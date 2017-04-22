const homeComponent = require('../home')
const beerComponent = require('../beer')
const chartsComponent = require('../charts')
const nestedChartComponent = require('../nested-chart')
const deepNestedChartComponent = require('../deep-nested-chart')
const notFoundComponent  = require('../not-found')
const { Router } = require('marko-path-router')

module.exports = {
  onMount: function () {
    const self = this

    const routes = [
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
      },
      { path: '/**', component: notFoundComponent }
    ]

    const render = Router.renderSync({
      routes: routes,
      initialRoute: self.input.path
    })

    const router = this.router = render
      .appendTo(this.getEl('router-container'))
      .getComponent()

    self.state.currentRoute = router.currentRoute

    router.on('update', () => {
      self.state.currentRoute = router.currentRoute
      console.log('updated')
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
    const router = this.router
    return router && router.currentRoute || ''
  },

  handleItemClick: function (event, el) {
    this.state.activeItem = el.getAttribute('data-key')
    this.update()
  }
}
