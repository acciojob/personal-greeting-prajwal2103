
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
 const [name, setName] = useState('');
  return (
    <div>
       <label htmlFor="ip">Enter your name:</label>
       <input id='ip' type='text' onChange={(e)=>{
        setName(e.target.value)
       }}  />
       <p>{name?`Hello ${name}!`:''}</p>
    </div>
  )
}

export default App
