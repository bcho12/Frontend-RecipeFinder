import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import CardHeader from './CardHeader'

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
					<CardHeader />
					{this.props.recipeItems.map(r => <RecipeCard recipeItem={r} renderRecipeAttributes={this.props.renderRecipeAttributes} />)}
	      </div>
    	)
	  }
}

export default CardContainer
