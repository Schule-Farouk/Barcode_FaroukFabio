import React from 'react';
<<<<<<< HEAD
import Farouk from './Farouk/arabisch';
import Fabio from './Fabio/italienisch';
import Jony from './Jony/albanisch';
=======
import Rezeptkarussell from './components/Rezeptkarussell';
import './App.css'; // Hier importierst du dein CSS
>>>>>>> 9856f0ba2623964d32919596fdb75eb683777476

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
