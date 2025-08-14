const express = require('express')
const app = express()

const PORT = 3001

app.get('', (req, res) => {
  console.log('request a ruta principal')
  res.end()
})
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
