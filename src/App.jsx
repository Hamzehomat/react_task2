
import { useState } from 'react';
import './App.css'

function App() {
  let [count,setCount]= useState(0);
  let changecount= ()=>{
    setCount(count+1);
  }
  
  return (
    <>
    <button onClick={changecount}> Hamzeh {count} </button>
   </>
   
    
  )
}

export default App
