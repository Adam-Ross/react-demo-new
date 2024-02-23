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
  const [singleTodo, setSingleTodo] = useState(null)
  const [loading, setLoading] = useState(false)

  // https://jsonplaceholder.typicoce.com/todos/:id

  // hooks
  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await res.json()
      setTasks(data)
    }

    getTodos()
  }, [])

  const getSingleTodo = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json()
    setSingleTodo(data)
  }

  const resetSingleTodo = () => {
    setSingleTodo(null)
  }



  // custom functions
  const addTask = (text) => {
    setTasks([...tasks, text])
  }

  if(loading) {
    return <Warning  message={message} /> 
  }

  const taskList = singleTodo ? <SingleItem singleTodo={singleTodo} resetSingleTodo={resetSingleTodo} /> : <Tasks tasks={tasks}
 
  getSingleTodo={getSingleTodo}
  />

  return (
    <>
      <TaskInput addTask={addTask} />
      {taskList}
    </>
  )

}

export default App
