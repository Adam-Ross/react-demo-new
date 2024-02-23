import '../App.css'

const Button = ({resetSingleTodo}) => {

    const handleClick = () => {
        resetSingleTodo()
    }

    return (
        <div onClick={handleClick}>Click here to return home...</div>
    )
}

export default Button