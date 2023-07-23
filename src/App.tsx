import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import About from "./about";

const data:string[] = ["a", "b", "c"]

function App() {
  //const [count, setCount] = useState(0)
  const [state, setState] = useState<string>("test");

  //data1 for pure return 
  //data2 for processed return

  return (
    <div className='main'>
      <h1>HELLO REACT</h1>
      <About data = {data} />
      <h1>{state}</h1>


      {
        data.map((item, idx) => {
          if (item === 'a') 
          return <h1 key = {idx}>AAA</h1>
          else 
          return <h4 key = {idx}>{item}</h4>    
        })}

      <div className='state'>
        {state}
      </div>
      <button onClick={() => setState("state set!")}>EEE</button>
    </div>
  )
}

export default App