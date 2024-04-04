import React from 'react';
import './arabisch.css';

function Farouk() {
  return (
    <div>
      <h1>Farouk's Amazing Recipes</h1>
      <div className="recipe">
        
        <h2>Chicken Shawarma</h2>
        <p>A delicious Middle Eastern dish!</p>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 lb boneless chicken thighs</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tsp ground cumin</li>
          <li>1 tsp paprika</li>
          <li>1/2 tsp turmeric</li>
          <li>1/4 tsp cinnamon</li>
          <li>1/4 cup plain yogurt</li>
          <li>2 tbsp lemon juice</li>
          <li>Salt and pepper to taste</li>
          <li>Pita bread</li>
          <li>Tahini sauce</li>
          <li>Tomatoes, lettuce, onions (for garnish)</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>In a bowl, mix garlic, cumin, paprika, turmeric, cinnamon, yogurt, lemon juice, salt, and pepper.</li>
          <li>Add chicken thighs to the marinade, cover, and refrigerate for at least 1 hour.</li>
          <li>Preheat grill to medium-high heat. Grill chicken for 6-8 minutes per side or until cooked through.</li>
          <li>Warm pita bread on the grill for a minute on each side.</li>
          <li>Slice chicken and serve in warm pita bread with tahini sauce and garnishes.</li>
        </ol>
      </div>
    </div>
  );
}

export default Farouk;
