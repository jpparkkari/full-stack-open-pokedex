const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use('/', express.static('dist'))

app.listen(PORT, () => {
  //eslint-disable-next-line
  console.log('server started on port 5000')
})

app.get('/health', (req, res) => {
  //res.send('ok')
  res.status(400).json({error: 'testing error for healthcheck'})
})

app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})