import { useRef } from "react"

function CustomInput(passedValues) {
    const { label, value, setValue, placeHolder, id } = passedValues;
    // let setTimeoutId = undefined; if a variable is not "state variable" then after every re-render of the component its value will be again set to the default one like setTimeoutId (here use api called "useRef" that will maintains the value within the re-renders and if you change its value than it does not re-renders the component)

    let setTimeoutId = useRef(undefined);

    function inputHandler(event) {
        // event.target.value is being accessed asynchronously, but by the time setTimeout runs, the event has been nulled out by React's synthetic event system. (this issue will occur with react + classic debouncing)
        // meaning the event object is reused by React and nulled after the function exits.
        const value = event.target.value;

        // we have to update the value immedialtely
        setValue(event.target.value);

        // provides the current-value
        if (setTimeoutId.current) {
            clearTimeout(setTimeoutId.current); // debouncing
        }

        setTimeoutId.current = setTimeout(function () {
            // perform some other task like bringing suggestion
            console.log(value);
        }, 1000);

    }

    return (
        <div className="input-container" style={{display: "flex", flexDirection: "row", gap: "20px"}}>
            <label htmlFor={id}>{label}</label>
            <input type="text" value={value} id={id} onInput={inputHandler} placeholder={placeHolder} />
            {/* we can map title value with input like value={title} */}
        </div>
    )
}


export default CustomInput;


// React function components re-run on every render, so you must store things like timeout IDs using useRef, which gives you a persistent, mutable container and does not component to re-render when the value gets changed