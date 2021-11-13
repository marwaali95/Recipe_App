import React , {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App = ()=>{
  const APP_ID="9c7ab241";
  const APP_KEY="19f442f9b395adc7b1aef4c513de2de4	";
  const[recipes,setRecipes] =useState([]);
  const[search,setSearch] =useState("");
  const[query,setQuery] = useState("chicken")
useEffect(()=>{
  getRecipe();
}
,[query]);
const getRecipe= async() =>{
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=%22${query}%22&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);
  const data = await response.json();
  console.log(data)
  setRecipes(data.hits);
};
const updateSearch = e=>{
  setSearch(e.target.value);

};
const getSearch = e=>{
  e.preventDefault();
  setQuery(search)
  setSearch("");
};


  return (
    <div className="App">
      <form className="search=form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value ={search} onChange={updateSearch}/>
        <button type="submit">Search</button>
      </form>
      {recipes.map(recipe=>
    <Recipe
      key = {recipe.recipe.url}
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients= {recipe.recipe.ingredients}
      />
    )}
    </div>
  );
} 


export default App;
