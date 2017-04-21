const homeComponent = require('../home')
const beerComponent = require('../beer')
const chartsComponent = require('../charts')
const nestedChartComponent = require('../nested-chart')
const deepNestedChartComponent = require('../deep-nested-chart')
const { Router } = require('marko-component-router')

function getRoutes () {
  return [
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
}

module.exports = {
  onCreate: function (input) {
    console.log(input)
    this.provider = {
      getRoutes
    }
  },

  onMount: function () {
    const self = this
    const router = self.getComponent('router')
    self.state.currentRoute = router.currentRoute

    router.on('update', () => {
      self.state.currentRoute = router.currentRoute
    })

    console.log('mounting this component')

    if (!this.provider.getRoutes) {
      setTimeout(function () {
        console.log('creating new provider')
        self.provider = { getRoutes }

        const mRouter = Router.renderSync({
          routeProvider: self.provider,
          initialRoute: '/charts'
        })
        let el = self.getComponent('router').getEl()
        mRouter.replace(el)
      }, 5000)
    }
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

  routeMatches: function (prefix) {
    if (this.getComponent) {
      let router = this.getComponent('router')
      let route = router ? router.currentRoute : ''
      return route.startsWith(prefix)
    }
    return false
  },

  handleItemClick: function (event, el) {
    this.state.activeItem = el.getAttribute('data-key')
    this.update()
  }
}
