import TaskItem from './TaskItem'

const Tasks = ({tasks}) => {
    return tasks.map(task => (
        <TaskItem task={task} key={task.id} />
    ))
}

export default Tasks