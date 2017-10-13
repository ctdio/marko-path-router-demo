require('chartist/dist/chartist.css')
// so hacky...
window.Chartist = require('chartist/dist/chartist.js')

const App = require('../../components/app')

App.renderSync().replace(document.getElementById('application-mount-point'))

