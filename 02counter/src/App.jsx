import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
   
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter--)
  };

  return (
    <>
      <h1> chai or react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
