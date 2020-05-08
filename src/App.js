import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Components/Recipe';
import Logo from "./logo.png";


const App = () => {
  
  const APP_ID = '846866bf';
  const API_KEY = '28bd022ccfabf0abff0cc567e74c2799	';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

   useEffect(()=>{
      getRecipes();
   },[query]);
  
   const getRecipes = async () => {
  
   const response = await fetch ( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
   const data = await response.json();
    setRecipes(data.hits);  
   }  

   const updateSearch = e => {
     setSearch(e.target.value)
   }

   const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
   }

 

  return (
    <div className="app-container">
      <img src={Logo} alt="logo" className="main-logo"/>
      <div className="title">      
        <h1 className="title-h">Recipe Leaf</h1>
    </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search recipes by keyword" />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div
      className="recipe-list"
      >
      {recipes.map((recipe)=> (
      <Recipe 
      key={recipe.recipe.label} 
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      dietLabels={recipe.recipe.dietLabels}
      healthLabels={recipe.recipe.healthLabels}
      />
          
      ))}
      </div>  
      </div>

  );
}

export default App;
