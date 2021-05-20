const express = require('express')
const app = express()
var   a= {
  name: "mohammad",
  age : 22
}
app.get('/api', (req, res) => {
  res.json(a)
})

app.listen()