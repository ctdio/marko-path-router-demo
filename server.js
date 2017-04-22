require('app-module-path').addPath(__dirname)
require('marko/node-require').install()
require('lasso/node-require-no-op').enable('.less', '.css')

require('marko/browser-refresh').enable()
require('lasso/browser-refresh').enable('*.marko *.css *.less')

const express = require('express')
const compression = require('compression')
const serveStatic = require('serve-static')

const isProduction = process.env.node_env === 'production'

const STATIC_DIR = `${__dirname}/static`

require('lasso').configure({
  plugins: [
    'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
  ],
  outputDir: STATIC_DIR, // Place all generated JS/CSS/etc. files into the "static" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction // Only add fingerprints to URLs in production
})

const app = express()

var port = process.env.PORT || 8080

app.use(compression())

app.use('/static', serveStatic(STATIC_DIR))

app.get('/**', require('src/pages/home'))

app.listen(port, function () {
  console.log(`Go to http://localhost:${port} to view the demo...`)
  if (process.send) {
    process.send('online')
  }
})
