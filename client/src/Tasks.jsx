import { FaTrash } from 'react-icons/fa'

function Tasks({ tasks,handleDelete }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} handleDelete={handleDelete}/>
      ) : (
        <p className='text-center'>There is no tasks added yet, add one to get started!</p>
      )}
    </div>
  )
}

const TaskList = ({ tasks, handleDelete }) => (
  <ul>
    {tasks.map((task) => (
      <li
        key={task.id}
        className="border-[1px] border-black my-3 py-3 flex justify-between px-10"
      >
        <span>{task.title}</span>
        <span onClick={()=> handleDelete(task.id)}>
          <FaTrash />
        </span>
      </li>
    ))}
  </ul>
)
export default Tasks
