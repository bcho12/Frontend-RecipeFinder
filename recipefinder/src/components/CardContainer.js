import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';
import '../index.css';


const Recipe = () => <h2 className="recipe">Recipes</h2>

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
					<Recipe />
					<Search />
					{this.props.recipeItems.map((r, i) =>
						<RecipeCard
							recipeItem={{...r, id: i + 1}}
							renderRecipeAttributes={this.props.renderRecipeAttributes} />)}
	      </div>
    	)
	  }
}

export default CardContainer

// <Search onSearchChange={_.debounce(this.props.handleSearch, 500)} showNoResults={false} />
