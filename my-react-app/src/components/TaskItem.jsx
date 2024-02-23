const TaskItem = ({task, getSingleTodo}) => {

    const handleClick = (e) => {
        const id = task.id
        getSingleTodo(id)
    }

    return (
        <div onClick={handleClick}>
            <h1>{task.title}</h1>
        </div>
    ) 

}

export default TaskItem