import React from 'react';
import Rezeptkarussell from './components/Rezeptkarussell';
import './App.css'; // Hier importierst du dein CSS
 
function App() {
  return (
    <div className="App">
      <Rezeptkarussell country="Arabische Gerichte" />
      <Rezeptkarussell country="Serbische Gerichte" />
      <Rezeptkarussell country="Italienische Gerichte" />
    </div>
  );
}
 
export default App;