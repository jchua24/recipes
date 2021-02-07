import './RecipeItem.css';

function RecipeItem(props) {
    
    const id = props.id;
    const recipeName = props.name;

    return (
      
        <div className="item">  

            <div className = "recipeID"> 
                {id}:  
            </div> 

            <div className="recipeName"> 
                <label className = "recipeText"> 
                    {recipeName}
                </label> 
            </div> 
                        
            <button onClick={() =>props.onDelete(id)} className="deleteButton">
                Delete            
            </button> 
        </div>
    );
  
}


export default RecipeItem; 