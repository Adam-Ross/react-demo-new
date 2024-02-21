import {useState} from 'react'
import Tasks from './components/Tasks'

import './App.css'

function App() {

  

  const [tasks, setTasks] = useState([
    {
      id: 1, 
      body: 'Call mom'
    },
    {
      id: 2, 
      body: 'Wash Car'
    },
    {
      id: 3, 
      body: 'Make dinner'
    },
  ])

  return (
    <>
      <Tasks tasks={tasks} />
    </>
  )
}

export default App
