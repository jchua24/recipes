
import axios from 'axios'; 


export const apiGetRecipes = async () => {

    try {    
        const res = await axios.get('/recipes');
  
        if (!res || res.status != 200) {
          throw 'Unable to retrieve recipes.';
        }
  
        return res.data; 
  
    } catch (err) {
        throw err;
    }
}


export const apiAddRecipe = async (name) => {

    try {    
        const res = await axios.post('/recipes', {name});
        
        if (!res || res.status != 200) {
          throw 'Unable to add recipe: ' + name;
        }
  
        return res.data; 
  
    } catch (err) {
        throw err;
    }
}


export const apiDeleteRecipe = async (recipeID) => {

    try {    
        const res = await axios.delete('/recipes/' + recipeID);
  
        if (!res || res.status != 200) {
          throw 'Unable to delete recipe: ' + recipeID;
        }
  
        console.log("successfully deleted recipe: " + recipeID); 
  
    } catch (err) {
        throw err;
    }
    
}






