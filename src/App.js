import logo from './logo.svg';
import './App.css';
import { useState, userState } from 'react';


function App() {
const [count, setCount] = useState(0);
const increment = ()=>{
  setCount(count +1);
}

  return (
    <div className="App">
      <h1> Counter App</h1>
      <h5>{count}</h5>
      <button onClick={increment}>Add</button>


    </div>
  );
}

export default App;
