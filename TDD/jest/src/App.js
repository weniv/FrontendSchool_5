import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(newColor)}
    >change to {newColor}</button>
  );
}

export default App;
