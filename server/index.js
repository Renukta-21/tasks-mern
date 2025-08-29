const express = require('express')
const {v4} = require('uuid')

const app = express()

const PORT = 3001

const tasks = [
  { title: 'task 1', id: v4(), completed: true },
  { title: 'task 2', id: v4(), completed: false },
  { title: 'task 3', id: v4(), completed: true },
]

const mainGreeting = `
  <h2>API Routes</h2>
  <ul>
  <li>/</li>
  <li><strong>/tasks </strong> Retrieve all tasks</li>
  </ul>
`

app.get('', (req, res) => {
  console.log('request a ruta principal')
  res.send(mainGreeting)
})
app.get('/tasks', (req,res)=>{
  console.log('/tasks GET')
  res.json(tasks)
})
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
