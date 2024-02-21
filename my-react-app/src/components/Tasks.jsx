import TaskItem from './TaskItem'

const Tasks = ({tasks}) => {
    return tasks.map((task, index) => (
        <TaskItem task={task} key={index}/>
    ))
}

export default Tasks