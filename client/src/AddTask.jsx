import { useState } from 'react'

function AddTask({ tasks }) {
  const [taskInput, settaskInput] = useState({
    id: null,
    title: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {...taskInput, id: Date.now()}
    settaskInput(newTask)
    console.log(newTask)
  }
  return (
    <div className="p-5">
      <form
        action=""
        className="flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col items-center w-full md:w-1/2">
          <label htmlFor="task_title">Title</label>
          <input
            type="text"
            id="task_title"
            onChange={(e) =>
              settaskInput({ ...taskInput, title: e.target.value })
            }
            className="border border-black rounded-lg w-full py-1 mt-4 focus:outline-0 text-center"
          />
          <button className="bg-blue-800 text-white rounded-xl w-full mt-4 py-2">
            Add Task
          </button>
        </section>
      </form>
    </div>
  )
}

export default AddTask
