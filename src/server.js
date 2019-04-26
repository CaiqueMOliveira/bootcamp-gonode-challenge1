const express = require('express')
const nunjucks = require('nunjucks')
const {
  indexRoute,
  checkRoute,
  majorRoute,
  minorRoute
} = require('../src/routes')

const app = express()
nunjucks.configure('src/views', {
  watch: true,
  autoescapepe: true,
  express: app
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

const isThereAgeParamInQuery = (req, res, next) => {
  const age = parseInt(req.query.age)
  if (!age) return res.redirect('/')
  return next()
}

app.get('/', indexRoute)

app.get('/major', isThereAgeParamInQuery, majorRoute)

app.get('/minor', isThereAgeParamInQuery, minorRoute)

app.post('/check', checkRoute)

app.listen(3000)
