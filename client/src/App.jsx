import { useState } from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'
import { v4 as uuidv4 } from 'uuid'


function App() {
  const [tasks, setTasks] = useState([
    { title: 'task 1', id: uuidv4() },
    { title: 'task 2', id: uuidv4() },
    { title: 'task 3', id: uuidv4() },
  ])

  const addTask = (title) => {
    const newTasks = [...tasks, { title, id: uuidv4() }]
    setTasks(newTasks)
    console.log(newTasks)
  }
  const handleDelete=(taskId)=>{
    const newTasks = tasks.filter(task=> task.id!==taskId)
    setTasks(newTasks)
  }
  const handleEdit = (taskId, title)=>{
    const updatedList = tasks.map(task=> task.id !== taskId ? task : {title, ...task})
    setTasks(updatedList)
    console.log(updatedList)
  }
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white w-[90%] h-fit mt-10 p-12">
        <section className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6">Task app</h2>
        </section>
        <AddTask addTask={addTask} />
        <Tasks tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
    </div>
  )
}

export default App
