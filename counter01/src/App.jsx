import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setColor] = useState(0);
  const addValue = () => {
    if(counter<=20){

     setColor(counter++);
  
      console.log();
    }
  };
    const remove=()=>{
      if(counter>=0){
        setColor(counter--)
      }
    }
  return (
    <>
      <h1>My favorite Number is {counter} !</h1>
      <button onClick={addValue}>add</button>
      <button onClick={remove}>remove</button>
    </>
  );
}

export default App;
