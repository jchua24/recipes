import React, { useState, useEffect } from 'react';
import {apiGetRecipes, apiAddRecipe, apiDeleteRecipe} from '../api/recipesAPI';
import RecipeItem from "./RecipeItem";



export default function Recipes() {
    const [recipes, setRecipes] = useState({});
    const [recipeName, setRecipeName] = useState("");

    //load recipes on initial render 
    useEffect(() => {
        getRecipes();
    }, []); 
 
    //api call to get all recipes
    const getRecipes = async () => {
        try {   
            const res  = await apiGetRecipes(); 
            setRecipes(res);

            console.log("retrieved recipes: " + recipes);
        } catch(err) {
            console.log(err); 
        }
    };

    //make api call to insert recipe 
    const addRecipe = async () => {
        try {   
            await apiAddRecipe(recipeName); 
            console.log("successfully added recipe: " + recipeName);
            
            setRecipeName("");
            getRecipes(); 
        } catch(err) {
            console.log(err); 
        }
    };

    //make api call to delete recipe
    const deleteRecipe = async (recipeID) => {
        try {   
            await apiDeleteRecipe(recipeID); 
            getRecipes(); 
            console.log("successfully deleted recipe: " +  recipeID);
        } catch(err) {
            console.log(err); 
        } 
    };

    //handle text input for recipe name
    const handleChange = (event) => {
        setRecipeName(event.target.value);
    }

    return (
        <div>
            {Object.entries(recipes).map( ([key, value]) => <RecipeItem id={key} name={value} onDelete={deleteRecipe} ></RecipeItem> )}

            <input placeholder="Recipe name..." value={recipeName} onChange={handleChange}/>  

            <button onClick={addRecipe} disabled={recipeName.length == 0}>
                Add Recipe
            </button>
        </div>
    );
}
