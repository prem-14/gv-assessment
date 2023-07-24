import JobState from './context/job/jobState'
import Home from './views/Home'

function App() {
  return (
    <JobState>
      <div className='bg-white text-rootTextColor'>
        <Home />
      </div>
    </JobState>
  )
}

export default App
