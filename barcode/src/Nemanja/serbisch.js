import React from 'react';
import './serbisch.css';

const SarmaIngredients = () => {
  return (
    <div> 
      <h1>Sarma</h1>
      <h3>ZUTATEN</h3>
      <h4>FÜR 4 PORTIONEN</h4>
      <ul>
        <li>20 Blatt Sauerkraut (aus dem türkischen Supermarkt)</li>
        <li>500 g gemischtes Hackfleisch</li>
        <li>200 g Reis</li>
        <li>1 große(r) Zwiebel</li>
        <li>2 Zehe(n) Knoblauch</li>
        <li>2 EL Paprikapulver</li>
        <li>2 EL getrocknete Minze</li>
        <li>500 ml Rinderbrühe</li>
        <li>100 g geräucherter Speck</li>
        <li>1 Dose(n) Tomaten, gehackt</li>
        <li>Etwas Öl</li>
        <li>nach Belieben Salz und Pfeffer</li>
      </ul>
    </div>
  );
};


const PitaIngredients = () => {
  return (
    <div>
      <h1>Pita mit Käse</h1>
      <h3>ZUTATEN</h3>
      <h4>FÜR 4 PORTIONEN</h4>
      <h5>Teig:</h5>
      <ul>
        <li>370 g Mehl, plus etwas zum Arbeiten</li>
        <li>1 Ei</li>
        <li>40 g Öl, plus etwas für die Form</li>
        <li>120 g lauwarmes Wasser</li>
        <li>10 g Essig</li>
        <li>½ TL Salz</li>
      </ul>
      <h5>Füllung:</h5>
      <ul>
        <li>400 g Feta</li>
        <li>100 g Joghurt</li>
        <li>1 Ei</li>
        <li>Salz</li>
      </ul>
      <h5>Außerdem:</h5>
      <ul>
        <li>etwas Öl und Wasser zum Bepinseln</li>
        <li>Sesam oder Mohn zum Bestreuen</li>
      </ul>
    </div>
  );
};



const CevapciciIngredients = () => {
  return (
    <div>
      <h1>Cevapcici</h1>
      <h3>ZUTATEN</h3>
      <h4>FÜR 4 PORTIONEN</h4>
      <ul>
        <li>2 Stück Eier</li>
        <li>500 g Hackfleisch</li>
        <li>3 Stück Knoblauchzehen</li>
        <li>5 EL Paniermehl</li>
        <li>1 TL Paprikapulver</li>
        <li>1 Prise Pfeffer</li>
        <li>1 Prise Salz</li>
        <li>1 TL Senf</li>
        <li>1 Bund Thymian</li>
        <li>1 Stück Zwiebel</li>
      </ul>
    </div>
  );
};



export { SarmaIngredients, PitaIngredients, CevapciciIngredients };
