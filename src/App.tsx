import React, {useState} from 'react';
import './App.css';

function App() {
  const [btnBackgroundColor, setBtnBackgroundColor] = useState('red')
  const newBtnColor = btnBackgroundColor === 'red' ? 'blue' : 'red'

  return (
    <div className="App">
        <button
        style={{backgroundColor: btnBackgroundColor}}
        onClick={() => setBtnBackgroundColor(newBtnColor)}
        >
          Change to {newBtnColor}
        </button>
        <input type="checkbox"/>
    </div>
  );
}

export default App;
