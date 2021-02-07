

function RecipeItem(props) {
    
    const id = props.id;
    const recipeName = props.name;

    return (
      
        <div>  
            {id} - {recipeName}
            <button onClick={() =>props.onDelete(id)}>
                Delete            
            </button> 
        </div>
    );
  
}


export default RecipeItem; 