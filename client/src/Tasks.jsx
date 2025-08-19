function Tasks({tasks}) {
  return (
    <div>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <p>There is no tasks added yet, add one to get started!</p>
      )}
    </div>
  )
}

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li
        key={task.id}
        className="border-[1px] border-black my-3 py-3 flex justify-center"
      >
        {task.title}
      </li>
    ))}
  </ul>
)
export default Tasks
