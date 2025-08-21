function TasksOptions({ handleDeleteCompleted, handleFilter }) {
  const handleFilterChange = (e)=>{handleFilter(e.target.value)}

  return (
    <div className="flex">
      <button
        className="ml-auto px-4 py-2 border-[1px] border-blue-700 rounded-lg mr-3 cursor-pointer"
        onClick={handleDeleteCompleted}
      >
        Delete completed
      </button>
      <select
        className="border border-blue-600 rounded-lg text-center outline-0 cursor-pointer"
        onChange={handleFilterChange}
      >
        <option value="all">All tasks</option>
        <option value="completed">Completed tasks</option>
        <option value="pending">Pending tasks</option>
      </select>
    </div>
  )
}

export default TasksOptions
