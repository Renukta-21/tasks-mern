import { useState } from 'react'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'

function Tasks({ tasks, handleDelete, handleEdit }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <p className="text-center">
          There is no tasks added yet, add one to get started!
        </p>
      )}
    </div>
  )
}

const TaskList = ({ tasks, handleDelete, handleEdit }) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem
        task={task}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    ))}
  </ul>
)

const TaskItem = ({ task, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(null)

  return (
    <li
      key={task.id}
      className="border-[1px] border-black my-3 py-3 flex justify-between px-10"
    >
      {task.id===isEditing?(
        <input/>
      ):<span>{task.title}</span>}

      <div className="flex gap-5">
        <span className="cursor-pointer" onClick={() => handleDelete(task.id)}>
          <FaTrash />
        </span>
        <span className="cursor-pointer" onClick={() => handleEdit(task.id)}>
          <FaPencilAlt />
        </span>
      </div>
    </li>
  )
}
export default Tasks
