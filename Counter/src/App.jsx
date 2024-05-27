


import { useState } from 'react';
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(15)
  // let counter = 5

   const addValue = () => {
    console.log("Clicked", counter);
    counter++;
    setCounter(counter)

   }
   const removeValue = () => {
    counter--;
    setCounter(counter);
   }
  return (
    <>
      
     <h1>Chair aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick=
     {addValue}>Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
