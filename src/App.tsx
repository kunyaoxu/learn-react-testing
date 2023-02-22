import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [inputValue, setInputValue] = useState('');

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
      {/* // TODO: windows 下測試一下 onlyNumber 輸入幾個數字後換成注音繼續輸入看狀況，也比對一下 mac 有沒有問題 */}
      <Input value={inputValue} onChange={setInputValue} onlyNumber />
    </div>
  );
}

export default App;
