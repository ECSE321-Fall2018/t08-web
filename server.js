let express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
let history = require('connect-history-api-fallback')
let app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

history({
  index: '/',
  rewrites: [{from: /\/login/, to: '/'}],
})

app.use(history({
  disableDotRule: true,
  verbose: true
}))

app.use(serveStatic(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'))
})

const port = process.env.PORT || 80
app.listen(port)