import AddTask from './AddTask'
import Tasks from './Tasks'

function App() {
  const tasks = [
    {
      title: 'task 1',
      id: '1',
    },
    {
      title: 'task 2',
      id: '2',
    },
    {
      title: 'task 3',
      id: '3',
    },
  ]

  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white w-[90%] h-fit mt-10 p-12">
        <section className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6">Task app</h2>
        </section>
        <AddTask tasks={tasks} />
        <Tasks tasks={tasks} />
      </div>
    </div>
  )
}

export default App
