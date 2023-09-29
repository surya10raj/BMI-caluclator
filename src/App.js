import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  const handleCalculate = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBmi(Number(bmiValue.toFixed(2)));

    if (bmiValue < 18.5) {
      setSuggestion("You are underweight.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setSuggestion("You have a normal weight.");
    } else if (bmiValue >= 24.9 && bmiValue < 30) {
      setSuggestion("You are overweight.");
    } else {
      setSuggestion("You are obese.");
    }

    // Clear the input values except for name
    setName("")
    setAge("");
    setWeight("");
    setHeight("");
};


  return (
    <div className="app">
      <h1>BMI Calculator</h1>

      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
      </div>

      <div>
        <label>Weight (kg): </label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>

      <div>
        <label>Height (cm): </label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      </div>

      <button onClick={handleCalculate}>Calculate</button>
      
      {bmi && (
        <div>
          <p>{name}, your BMI is: {bmi}</p>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default App;
