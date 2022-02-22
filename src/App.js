import React ,{useState}from "react";
import "./App.css"

const App = () => {
  const [count,setCount] = useState(0)
  return(
<div className="App">
  <header>
    <h1>Counter App Using State</h1>
  </header>
  <h2>Current VAlue Of Count is {count}</h2>
  <button className="button" onClick={() => setCount(0)}>RESET</button>
  <button className="button" onClick={() => count>=10?"":setCount(count+1)}>INCREAMENT COUNTER</button>
  <button className="button" onClick={() => count<=0?"":setCount(count-1)}>DECREAMENT COUNTER</button>
  
</div>
  )
}

export default App;