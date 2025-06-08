function CustomInput(passedValues) {
    const { label, value, setValue, placeholder } = passedValues;
    let setTimeoutId = undefined;

    function inputHandler(event) {
        clearTimeout(setTimeoutId); // debouncing
        setTimeoutId = setTimeout(function () {
            setValue(event.target.value);
        }, 1000);
    }

    return (
        <div className="input-container" style={{display: "flex", flexDirection: "row", gap: "20px"}}>
            <label htmlFor="title">{label}</label>
            <input type="text" id="title" onInput={inputHandler} placeholder={placeholder} />
            {/* we can map title value with input like value={title} */}
        </div>
    )
}


export default CustomInput;