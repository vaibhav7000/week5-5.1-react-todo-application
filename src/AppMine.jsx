import { useState } from "react"; // this is api that react provides to maintain the state and if there is any changes to the state will delegate the task of updation / DOM-manipulation to the ReactDOM

function AppMine() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button onClick={function() {
        setCount(count + 1); // we have provided new state to the api (first it will calculate the difference between the two state (using virtualDOM -> old state) if there will be differnence that ReactDOM will update the value using DOM-manipulation)
      }}>Press me to increase count</button>
      <div>{count}</div>
    </div>
  )
}

// the function is returning XML that is kind of HTML. In XML we can write JS inside the {js code}

export default AppMine;