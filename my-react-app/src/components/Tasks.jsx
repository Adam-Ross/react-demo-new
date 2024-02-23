import TaskItem from './TaskItem'

const Tasks = ({tasks, getSingleTodo}) => {
    return tasks.map((task, index) => (
        <TaskItem task={task} key={task.id} getSingleTodo={getSingleTodo} />
    ))
}

export default Tasks