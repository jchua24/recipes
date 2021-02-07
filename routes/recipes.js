const express = require('express');
const router = express.Router() 


//dictionary of recipe names - keys are id, values are recipe names
const recipes = {1: "iced tea", 2: "pepperoni pizza", 3: "caesar salad"};  

let id = 4; 

// get all recipes 
router.get("/", async (req, res) => {
    return res.send(recipes); 
});

//add recipe 
router.post("/", async (req, res) => {

    //extract recipe name and store in dictionary
    const recipeName = req.body.name; 
    recipes[id] = recipeName; 

    //increment id for future inserts
    id += 1;

    return res.sendStatus(200);

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