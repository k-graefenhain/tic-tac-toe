import React from 'react';
import './App.css';
import {Square} from "./components/Square";

function App(): any {
  return (
    <>
        <div className="board-row">
            <Square value={1}/>
            <Square value={4}/>
            <Square value={5}/>
        </div>
        <div className="board-row">
            <Square value={4}/>
            <Square value={5}/>
            <Square value={6}/>
        </div>
        <div className="board-row">
            <Square value={7}/>
            <Square value={8}/>
            <Square value={9}/>
        </div>
    </>
  );
}

export default App;

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

// export default App;
