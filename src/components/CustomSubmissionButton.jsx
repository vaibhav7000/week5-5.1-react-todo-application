function CustomSubmissionButton(passedValues) {
    const { handler } = passedValues;
    return (
        <div>
            <button onClick={handler} >Add Todo</button>
        </div>
    )
}


export default CustomSubmissionButton;


// by-default if the parent component re-renders the child will also re-renders even if it does not uses the state-variables. this can be prevent