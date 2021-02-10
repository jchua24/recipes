import './RecipeItem.css';

function RecipeItem(props) {
    
    const name = props.name;
    const ingredients = props.ingredients;

    return (
      
        <div className="item">  

            <div className = "recipeID"> 
                {name}:  
            </div> 

            <div className="recipeName"> 
                <label className = "recipeText"> 
                    {ingredients.join(", ")}
                </label> 
            </div> 
                        
            <button onClick={() =>props.onDelete(name)} className="deleteButton">
                Delete            
            </button> 
        </div>
    );
  
}


export default RecipeItem; 