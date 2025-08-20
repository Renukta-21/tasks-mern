function TasksOptions({handleDeleteCompleted}) {
  return (
    <div className="flex">
      <button
        className="ml-auto px-4 py-2 border-[1px] border-blue-700 rounded-md"
        onClick={handleDeleteCompleted}
      >
        Delete completed
      </button>
    </div>
  )
}

export default TasksOptions
