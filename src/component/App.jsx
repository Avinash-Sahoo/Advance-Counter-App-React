import React, { useState } from "react";
import "../stylesheet/App.css";

const App = () => {
  const [count,setCount]= useState(0)
  const [step,setStep]= useState(5)
  const [max,setMax]= useState(15)
  const stepsArray = [5, 10, 15];
  const maxArray = [15, 100, 200];

  const handleIncrement= ()=>{
    setCount(count+step <= max ? count+step : count );
  }
  const handleDecrement=()=>{
    setCount(count > 0 ? count-step : count);
  }
  const handleReset=()=>{
    setCount(0)
  }
  return (
    <>
      <div className="main">
        <h1>Counter App</h1>
        <div className="container">
          <h2>{count}</h2>
          <div className="allbutton">
            <div className="stepvalue">
              <h3>Steps</h3>
              {stepsArray.map((eachstep) => (
                <button className={step === eachstep ? "active" : ""}
                onClick={()=>{
                  setStep(eachstep)
                  setCount(0)
                }}>{eachstep}</button>
              ))}
            </div>
            <div className="maxvalue">
              <h3>Max Value</h3>
              {maxArray.map((eachmax) => (
                <button className={max === eachmax ? "active" : ""}
                onClick={()=>{
                  setMax(eachmax)
                  setCount(0)
                }}>{eachmax}</button>
              ))}
            </div>
          </div>

          <div className="btn">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
