const express = require('express');
const router = express.Router() 


//dictionary of recipe names - keys are recipe names, values are list of ingredients
const recipes = {};  


// get all recipes 
router.get("/", async (req, res) => {
    return res.send(recipes); 
});

//add recipe 
router.post("/", async (req, res) => {

    //extract recipe name and store in dictionary
    const recipeRequest = req.body; 
    const recipeName = recipeRequest.recipeName; 
    const ingredients = recipeRequest.ingredients; 

   
    //check if recipe already stored, and add if not present
    if(!(recipeName in recipes)) {
        recipes[recipeName] = ingredients; 
        return res.sendStatus(200);
    } 

    return res.sendStatus(409); //recipe already exists

}); 


// delete specific recipe 
router.delete("/:id", async (req, res) => {

    const recipeID = req.params.id; 

    if (recipeID in recipes) {
        delete recipes[recipeID]; 
        return res.sendStatus(200); // successfully deleted 
    }

    return res.sendStatus(404); //recipe not found

});

module.exports = router; 