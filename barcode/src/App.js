import React from 'react';
import Rezeptkarussell from './components/Rezeptkarussell';
import './App.css';

function App() {
  const countries = ['Arabische Gerichte', 'Italienische Gerichte', 'Serbische Gerichte'];
  
  return (
    <div className="App">
      {countries.map((country, index) => (
        <Rezeptkarussell key={index} country={country} />
      ))}
    </div>
  );
}

export default App;
