import { useState } from "react";
import CustomInput from "./components/CustomInput";
import CustomSubmissionButton from "./components/CustomSubmissionButton";
import Todo from './components/Todo.jsx'
import { string, z } from "zod"

export default function App() {
    const [title, setTitle] = useState(""); // these apis are provided by the React, these apis inherits the code of DOM-manipulation using ReactDOM
    // title -> always have the current value, 
    // setTitle -> has the power of updating the value and performing DOM-manipulation  
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodoHandler() {
        const stringSchema = z.string().trim().min(1);

        let result = stringSchema.safeParse(title);

        if(!result.success) {
            alert("Add valid title");
            return
        }

        result = stringSchema.safeParse(description);

        if(!result.success) {
            alert("Add a valid description");
            return;
        }

        
        // this api will update the todos and also been reflected in the document
        setTodos([...todos, {
            title, description
        }])

        // these methods does not get invoked immediately by the react
        setTitle("");
        setDescription("");


    }

    return (
        <div className="todo-container" style={{display: "flex", flexDirection:"column", gap: "20px", margin: "20px"}}>
            <CustomInput id="title" label="Title" value={title} setValue={setTitle} placeHolder="Enter todo title" />
            <CustomInput id="description" label="Description" value={description} setValue={setDescription} placeHolder="Enter todo description" />
            <CustomSubmissionButton handler={addTodoHandler} />
            {/* if we provide array that contains the html elements build from the React Syntax than all of them will be rendered on the screen  */}

            {/* JSX supports only "expressions" (any piece of code that returns / produces the value like function calls array apis like map, filter, ternary operatord ), not statements (piece of code that peforms some task (for loop) but does not returns value) */}
            {todos.map((todo, index) => <Todo key={index.toString()} title={todo.title} description={todo.description} /> )}
        </div>
    )
}

// We can only export 1 variable / function with" export default", all others should be either exported like { all vairbales } or explicity have export keyword

// if exporting only 1 variable / function use the "export default"
// if exporting multiple either write export with all the function / use export { all variables }