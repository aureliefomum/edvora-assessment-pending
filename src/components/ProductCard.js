import styles from '../../styles/Home.module.css'


function ProductCard(){

   return (
<div class="item">
        <img />
        <div class="flex-container">
           <h1 class="title">${result.recipe.label}</h1>
            {/* add a button  */}
           <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
        </div>
        <p class="item-data ingredients">Ingredients: ${(result.recipe.ingredients).map(el=>el.text)}</p>
        <h4 class="small-item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels: 'No Data Found'}</h4>
        <h4 class="small-item-data">Health Label: ${result.recipe.healthLabels}
        </h4>
        <h6 class="small-item-data">Calories: ${result.recipe.calories.toFixed(2)}Kcal</h6>          
             
        
        
    </div>

   ) 

}

export default ProductCard