import React, { useState } from 'react';

import './RecipeEntry.css';

function RecipeFilter(props) {


    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]); 

    const [recipeMatches, setRecipeMatches] = useState([]); 
    const recipes = props.recipes; 
    

    //handle text input for recipe name
    const handleChange = (event) => {
    
        setIngredient(event.target.value);
    
    }

    const addIngredient = () => {

        setIngredients([...ingredients, ingredient.trim()]); 
        setIngredient(""); 
    }


    const reset = () => {
        setIngredients([]); 
        setRecipeMatches([]);
    }

    const performSearch = () => {

        setRecipeMatches([]); //reset current matches

        console.log("recipes are: " + JSON.stringify(recipes));
        console.log("ingredients we have are: " + JSON.stringify(ingredients));

        const matches = []; 

        for(let i = 0; i < Object.keys(recipes).length; i++) {
                

            let recipeName = Object.keys(recipes)[i]; 

            const recipeIngredients = recipes[recipeName];

            //filtering
            if (recipeIngredients.every(val => ingredients.includes(val))) {
                console.log("found a match for recipe " + recipeName + " with user ingredients " + ingredients); 
                 

                if(!(recipeName in recipeMatches)) {
                    matches.push(recipeName); 
                }
            };
        }

        setRecipeMatches(matches);
    }


    return (
      
        <div className="">  
           

            <input id="ingredient" placeholder="Ingredient..." value={ingredient} onChange={handleChange}/>  


            <button onClick={() => addIngredient()} disabled={ingredient.length == 0}>
                Add Ingredient
            </button>

            <button onClick={() => performSearch()} disabled={ingredients.length == 0}>
               Search
            </button>

            <button onClick={() => reset()}>
               Reset
            </button>

            <div> 
                Looking for recipes that can be made with: {ingredients.join(", ")}

                <div> 
                    We can make: 
                    {recipeMatches.map((match) => <li>{match} </li>)}
                </div> 
                
            </div> 

        </div>


    );
  
}


export default RecipeFilter; 