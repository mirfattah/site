const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.send('s World!')
})

app.listen()