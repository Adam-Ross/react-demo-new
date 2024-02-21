import {useState} from 'react'
import Tasks from './components/Tasks'
import TaskInput from './components/TaskInput'


import './App.css'

function App() {

  

  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    setTasks([...tasks, text])
  }

  const taskList = tasks.length === 0 ? <h1>There are no tasks yet...</h1> : <Tasks tasks={tasks}/>

  return (
    <>
      <TaskInput addTask={addTask} />
      {taskList}
    </>
  )

}

export default App
