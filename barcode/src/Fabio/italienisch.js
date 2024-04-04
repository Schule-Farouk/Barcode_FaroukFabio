import React, { useState } from 'react';
import QRcode from './Image/QR.png';
import './italienisch.css';

const RecipePage = () => {
  const recipes = [
    {
      title: 'Recipe 1',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
    },
    {
      title: 'Recipe 2',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
    },
    {
      title: 'Recipe 3',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
    }
  ];

  return (
    <div className="recipe-page">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-box">
          <h2 className="recipe-title">{recipe.title}</h2>
          <ul className="recipe-ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipePage;