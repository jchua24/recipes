import React, { useState } from 'react';

import './RecipeEntry.css';

function RecipeEntry(props) {
    
    const [recipeName, setRecipeName] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]); 
    

    const submitRecipe = () => {
        props.addRecipe(recipeName, ingredients);
        setRecipeName("");
        setIngredients([]);
    }

    const addIngredient = () => {

        setIngredients([...ingredients, ingredient]); 
        setIngredient(""); 
    }

    //handle text input for recipe name
    const handleChange = (event) => {
        
        if(event.target.id == "recipeName") {
            setRecipeName(event.target.value); 
        } else{
            setIngredient(event.target.value);
        }
    }


    return (
      
        <div className="">  
            <input id="recipeName" placeholder="Recipe name..." value={recipeName} onChange={handleChange}/>  

            <input id="ingredient" placeholder="Ingredient..." value={ingredient} onChange={handleChange}/>  


            <button onClick={() => addIngredient()} disabled={ingredient.length == 0}>
                Add Ingredient
            </button>

            <button onClick={() => submitRecipe()} disabled={recipeName.length == 0}>
                Add Recipe
            </button>

            <div> 
                Recipe Name: {recipeName}
                {ingredients.map((ingredient) => <li>{ingredient} </li>)} 
            </div> 

        </div>


    );
  
}


export default RecipeEntry; 