import React from 'react';
import './italienisch.css';

const RecipePage = ({ recipes }) => {
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