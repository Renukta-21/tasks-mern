import { useState } from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'
import { v4 as uuidv4 } from 'uuid'
import TasksOptions from './TasksOptions'

function App() {
  const [tasks, setTasks] = useState([
    { title: 'task 1', id: uuidv4(), completed: true },
    { title: 'task 2', id: uuidv4(), completed: false },
    { title: 'task 3', id: uuidv4(), completed: true },
  ])

  const addTask = (title) => {
    const newTasks = [...tasks, { title, id: uuidv4(), completed: false }]
    setTasks(newTasks)
  }
  const handleDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }
  const handleEdit = (taskId, title) => {
    const updatedList = tasks.map((task) =>
      task.id !== taskId ? task : { title, ...task }
    )
    setTasks(updatedList)
  }

  const handleCheckToggle = (taskId) => {
    const updatedList = tasks.map((task) =>
      task.id !== taskId ? task : { ...task, completed: !task.completed }
    )
    setTasks(updatedList)
    console.log(updatedList)
  }
  const handleDeleteCompleted = () => {
    const updatedList = tasks.filter((task) => task.completed !== true)
    setTasks(updatedList)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed === true
    if (filter === 'pending') return task.completed === false
  })
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white w-[90%] h-fit mt-10 p-12">
        <section className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6">Task app</h2>
        </section>
        <AddTask addTask={addTask} />
        <TasksOptions
          handleDeleteCompleted={handleDeleteCompleted}
          handleFilter={handleFilter}
        />
        <Tasks
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleCheckToggle={handleCheckToggle}
        />
      </div>
    </div>
  )
}

export default App
