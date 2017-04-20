const mountPoint = document.getElementById('application')
const App = require('src/components/app')

App.renderSync().replace(mountPoint)
