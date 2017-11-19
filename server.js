require('require-self-ref');
require('marko/node-require').install()
require('lasso/node-require-no-op').enable('.less', '.css')

require('marko/browser-refresh').enable()
require('lasso/browser-refresh').enable('*.marko *.css *.less')

const Koa = require('koa')

const isProduction = process.env.node_env === 'production'

const STATIC_DIR = `${__dirname}/static`
const compress = require('koa-compress')
const serve = require('koa-static')
const mount = require('koa-mount')
const Router = require('koa-path-router')

const router = new Router()
const template = require('~/src/pages/home');

require('lasso').configure({
  plugins: [
    'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
  ],
  outputDir: STATIC_DIR, // Place all generated JS/CSS/etc. files into the "static" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction // Only add fingerprints to URLs in production
})

const app = new Koa()

var port = process.env.PORT || 8080

app.use(compress())

app.use(mount('/static', serve(STATIC_DIR)))

router.get('/', async (ctx) => {
  ctx.set('Content-Type', 'text/html; charset=utf-8')
  ctx.body = template.stream({})
})

app.use(router.getRequestHandler())

app.listen(port, function () {
  console.log(`Go to http://localhost:${port} to view the demo...`)
  if (process.send) {
    process.send('online')
  }
})
