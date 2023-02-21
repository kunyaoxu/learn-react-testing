import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Button from './components/Button';

function App() {
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

      <Hello />
      <Hello name="Lothair" />
      <Button text="按鈕" onClick={() => console.log('嗨 我是按鈕')} />
    </div>
  );
}

export default App;
