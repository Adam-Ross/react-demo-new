const TaskItem = ({task}) => {
    return (
        <>
            <h1>{task.body}</h1>
            <p>{task.id}</p>
        </>
    ) 

}

export default TaskItem