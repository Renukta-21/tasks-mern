function Tasks() {
  const tasks = ['task 1', 'task 2', 'task 3']

  return (
    <div>
      {tasks.length > 0 ? (
        <p>{tasks.map(task=>(
            <div>{task}</div>
        ))}</p>
      ) : (
        <p>There is no tasks added yet, add one to get started!</p>
      )}
    </div>
  )
}

export default Tasks
