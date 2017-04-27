const homeComponent = require('../home')
const beerComponent = require('../beer')
const chartsComponent = require('../charts')
const nestedChartComponent = require('../nested-chart')
const deepNestedChartComponent = require('../deep-nested-chart')
const notFoundComponent  = require('../not-found')
const { Router } = require('marko-path-router')

module.exports = {
  onCreate: function () {
    this.state = {
      currentRoute: window.location.pathname
    }
  },

  onMount: function () {
    const self = this
    const state = self.state

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
      initialRoute: state.currentRoute
    })

    const router = this.router = render
      .appendTo(this.getEl('router-container'))
      .getComponent()

    state.currentRoute = router.currentRoute

    router.on('update', () => {
      state.currentRoute = router.currentRoute
    })
  },

  onInput: function (input) {
    let state = this.state
    state.currentRoute = input.currentRoute || state.currentRoute
    state.activeItem = input.activeItem || state.activeItem
  },

  toggleSidebar: function () {
    var sidebar = this.getComponent('sidebar')
    sidebar.toggle();
  },

  handleItemClick: function (event, el) {
    this.state.activeItem = el.getAttribute('data-key')
    this.update()
  }
}
