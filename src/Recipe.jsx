import React from 'react';

function Recipe({ recipe }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-sm mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700 mb-2">Calories: <span className="font-bold">{Math.round(recipe.calories)}</span></p>
            <ul className="list-disc list-inside mb-4">
                {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
            </ul>
            <a 
                href={recipe.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 font-medium"
            >
                View Recipe
            </a>
        </div>
    );
}

export default Recipe;
