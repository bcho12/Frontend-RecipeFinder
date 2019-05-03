import React, { Component } from 'react'
import CardContainer from './CardContainer'
import RecipeHeader from './RecipeHeader'

class RecipeContainer extends Component {

	// state = {
	// 	currentRecipe: null
	// }
	//
	// setCurrentRecipe = (recipeItem) => {
	// 	// ...
	// }

	  render() {
			return (
	      <div className="recipe-container">
					<RecipeHeader />
					<CardContainer recipeItems={this.props.recipeItems} renderRecipeAttributes={this.props.renderRecipeAttributes} />
	      </div>
    	)
	  }
}

export default RecipeContainer
