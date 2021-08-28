import React, {useState} from 'react';

export function replaceCamelWithSpaces(colorName: string) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
    const [btnBackgroundColor, setBtnBackgroundColor] = useState('MediumVioletRed')
    const [disabled, setDisabled] = useState(false)
    const newBtnColor = btnBackgroundColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

    return (
        <div className="App">
            <button
                style={{backgroundColor: disabled ? 'gray' : btnBackgroundColor}}
                onClick={() => setBtnBackgroundColor(newBtnColor)}
                disabled={disabled}
            >
                Change to {replaceCamelWithSpaces(newBtnColor)}
            </button>
            <label htmlFor="disable-button-check">
                Disable button
                <input
                    type="checkbox"
                    id="disable-button-check"
                    defaultChecked={disabled}
                    aria-checked={disabled}
                    onClick={() => setDisabled(!disabled)}
                />
            </label>
        </div>
    );
}

export default App;
