function CustomSubmissionButton(passedValues) {
    const { handler } = passedValues;
    return (
        <div>
            <button onClick={handler} >Add Todo</button>
        </div>
    )
}


export default CustomSubmissionButton;