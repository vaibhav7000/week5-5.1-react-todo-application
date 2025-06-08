function Todo(passedValues) {
    const { title, description } = passedValues;

    return (
        <div>
            {/* using expression (returns or produces) value */}
            <h1>{title.toUpperCase()}</h1> 
            <h2>{description}</h2>
        </div>
    )
}


export default Todo;