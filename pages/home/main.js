const mountPoint = document.getElementById('application')
const App = require('components/app')

App.renderSync().replace(mountPoint)
