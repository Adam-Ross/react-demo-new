import {useState} from 'react'

const TaskInput = ({addTask}) => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text} />
            <input type="submit" />
        </form>
    )
}

export default TaskInput