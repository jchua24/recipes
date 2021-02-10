import React, { useState, useEffect } from 'react';
import {apiGetRecipes, apiAddRecipe, apiDeleteRecipe} from '../api/recipesAPI';
import RecipeItem from "./RecipeItem";

import RecipeEntry from "./RecipeEntry";
import RecipeFilter from "./RecipeFilter";



export default function Recipes() {
    const [recipes, setRecipes] = useState({});
   

    //load recipes on initial render 
    useEffect(() => {
        getRecipes();
        console.log("retrieved recipes: " + JSON.stringify(recipes));
    }, []); 
 
    //api call to get all recipes
    const getRecipes = async () => {
        try {   
            const res  = await apiGetRecipes(); 
            setRecipes(res);

           
        } catch(err) {
            console.log(err); 
        }
    };

    //make api call to insert recipe 
    const addRecipe = async (recipeName, ingredients) => {
        try {   
            await apiAddRecipe(recipeName, ingredients); 
            console.log("successfully added recipe: " + recipeName);
            
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


    return (
        <div>
            {Object.entries(recipes).map( ([key, value]) => <RecipeItem key={key} name={key} ingredients={value} onDelete={deleteRecipe} ></RecipeItem> )}

            <RecipeEntry addRecipe={addRecipe}> </RecipeEntry>

            <RecipeFilter recipes={recipes}> </RecipeFilter>




        </div>
    );
}
