import React, { Component } from 'react'
import RecipeCard from './RecipeCard'


class CardContainer extends Component {

	// state = {
	// 	currentRecipe: null
	// }
	//
	// setCurrentRecipe = (recipeItem) => {
	// 	// ...
	// }

	  render() {
			return (
	      <div className="card-container">
					{this.props.recipeItems.map(r =>
						<RecipeCard
							recipeItem={r}
							renderRecipeAttributes={this.props.renderRecipeAttributes} />)}
	      </div>
    	)
	  }
}

export default CardContainer
