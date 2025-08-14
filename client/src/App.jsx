import Tasks from './Tasks'

function App() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className='bg-white w-[90%] h-fit mt-10 p-12'>
        <section className='flex flex-col items-center'>
          <h2 className="text-4xl font-bold mb-6">Task app</h2>
        </section>
        <Tasks />
      </div>
    </div>
  )
}

export default App
