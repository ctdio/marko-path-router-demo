require('require-self-ref');

const Koa = require('koa')

const isProduction = process.env.node_env === 'production'

const STATIC_DIR = `${__dirname}/static`
const fs = require('fs')
const compress = require('koa-compress')
const serve = require('koa-static')
const mount = require('koa-mount')

const app = new Koa()
const page = fs.readFileSync('./src/pages/home/index.html', 'utf8')

var port = process.env.PORT || 8080

app.use(compress())

app.use(mount('/static', serve(STATIC_DIR)))

app.use(async (ctx) => {
  ctx.body = page
})

app.listen(port, function () {
  console.log(`Go to http://localhost:${port} to view the demo...`)
  if (process.send) {
    process.send('online')
  }
})
