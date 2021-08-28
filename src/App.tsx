import React, {useState} from 'react';
import './App.css';

function App() {
  const [btnBackgroundColor, setBtnBackgroundColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newBtnColor = btnBackgroundColor === 'red' ? 'blue' : 'red'

  return (
    <div className="App">
        <button
        style={{backgroundColor: btnBackgroundColor}}
        onClick={() => setBtnBackgroundColor(newBtnColor)}
        disabled={disabled}
        >
          Change to {newBtnColor}
        </button>
        <input
            type="checkbox"
            defaultChecked={disabled}
            aria-checked={disabled}
            onClick={() => setDisabled(!disabled)}
        />
    </div>
  );
}

export default App;
