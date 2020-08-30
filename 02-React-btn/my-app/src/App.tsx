import React from 'react';
import logo from './logo.svg';
import './App.css';
let MoneyButton = require('@moneybutton/react-money-button').default

function App() {
  return (
    <div className="App">
      <MoneyButton
            to="tenthyoung@moneybutton.com" 
            amount="1"
            currency="USD"
          />
    </div>
  );
}

export default App;
