import { useState } from 'react'
import { FaTrash, FaPencilAlt, FaCheckSquare } from 'react-icons/fa'

function Tasks({ tasks, handleDelete, handleEdit,handleCheckToggle }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleCheckToggle={handleCheckToggle}
        />
      ) : (
        <p className="text-center">
          There is no tasks added yet, add one to get started!
        </p>
      )}
    </div>
  )
}

const TaskList = ({ tasks, handleDelete, handleEdit, handleCheckToggle }) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleCheckToggle={handleCheckToggle}
      />
    ))}
  </ul>
)

const TaskItem = ({ task, handleDelete, handleEdit, handleCheckToggle }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.title)

  const toggleEdit = () => {
    if (isEditing) {
      setIsEditing(false)
      handleEdit(task.id, editText)
    } else {
      setIsEditing(true)
    }
  }
  return (
    <li className="border-[1px] border-black my-3 py-3 flex justify-between px-10">
      {isEditing ? (
        <input
          className="border-[1px] border-black px-5"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <div className='flex items-center gap-5 '>
          <input type='checkbox' className='scale-[1.5] accent-green-600' checked={task.completed} onChange={()=>handleCheckToggle(task.id)}/>
          <span className={task.completed ? 'line-through' : undefined}>
            {task.title}
          </span>
        </div>
      )}

      <div className="flex gap-5">
        <span className="cursor-pointer" onClick={() => handleDelete(task.id)}>
          <FaTrash />
        </span>
        <span className="cursor-pointer" onClick={toggleEdit}>
          <FaPencilAlt />
        </span>
      </div>
    </li>
  )
}
export default Tasks
