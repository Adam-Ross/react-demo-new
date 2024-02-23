import Button from './Button'

const SingleItem = ({singleTodo, resetSingleTodo}) => {
    return (
        <>
            <h1>{singleTodo.title}</h1>
            <p>{`This post was made by user: ${singleTodo.userId}`}</p>
            <Button className="btn" resetSingleTodo={resetSingleTodo}/>
        </>
    )
}

export default SingleItem