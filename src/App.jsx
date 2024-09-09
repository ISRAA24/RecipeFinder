import React, { useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const search = async () => {
    const API_KEY = '479c9449f88a4aecc5b9a399df5d9384'; 
    const API_ID = 'a0b69229'; 
    const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    try {
      const result = await axios.get(url);
      setRecipes(result.data.hits);
      setQuery('');
    } catch (error) {
      console.error("Error fetching the recipe data", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Recipe Finder</h1>
      <div className="max-w-md mx-auto mb-8 flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Enter ingredient" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={search} 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;


