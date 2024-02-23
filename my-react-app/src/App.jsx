import {useState, useEffect} from 'react'
import Tasks from './components/Tasks'
import Warning from './components/Warning'
import SingleItem from './components/SingleItem'
import TaskInput from './components/TaskInput'


import './App.css'

function App() {
  // state
  const [tasks, setTasks] = useState([])
  const [message, setMessage] = useState('There are no tasks...')


  // hooks
  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await res.json()
      setTasks(data)
    }

    getTodos()
  }, [])



  // custom functions
  const addTask = (text) => {
    setTasks([...tasks, text])
  }

  const taskList = tasks.length === 0 ? <Warning  message={message} /> : <Tasks tasks={tasks}/>

  return (
    <>
      <TaskInput addTask={addTask} />
      <SingleItem />
      {taskList}
    </>
  )

}

export default App
