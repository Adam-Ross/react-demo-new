const TaskItem = ({task}) => {

    const handleClick = (e) => {
        console.log(task.id)
    }

    return (
        <div onClick={handleClick}>
            <h1>{task.title}</h1>
            <p>{task.id}</p>
        </div>
    ) 

}

export default TaskItem