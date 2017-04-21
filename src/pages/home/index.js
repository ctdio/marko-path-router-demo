var template = require('./index.marko');

module.exports = function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  console.log(req.url)
  template.renderToString({
    initialRoute: req.url
  }, (err, html) => {
    console.log(html)
    res.end(html)
  })
}
