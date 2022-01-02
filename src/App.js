import { useState } from "react";
import './App.css';
import Sample from './Sample';

function App() {

  const [ val, setVal ] = useState("Tom")

  return (
    <div className="App">
      <h1 onClick={ () => { setVal("Aaron") } } > Click on Me </h1>
      <Sample name={val} />
    </div>
  );
}

export default App;
