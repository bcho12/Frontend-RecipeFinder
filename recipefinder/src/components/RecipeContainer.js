import React, { Component } from 'react'
// import CardContainer from './CardContainer'
import { Search, Input, Button } from 'semantic-ui-react'
import '../index.css';
import RecipeCard from './RecipeCard';

const Recipe = () => <h2 className="recipe">Recipes</h2>

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
	      <div className="recipeContainer">
					<Recipe />
					<br />
					<Input onChange={(event) => this.props.handleSearch(event)} placeholder="Search Recipes"/>
					<br />
					<br />
						<div className="container recipeCard">
						{this.props.recipeItems.map((r, i) =>
								<RecipeCard
									key={i}
									recipeItem={r}
									handleFavorites={this.props.handleFavorites}
									renderRecipeAttributes={this.props.renderRecipeAttributes} />)}
						</div>
					<Button.Group>
			    	<Button labelPosition='left' icon='left chevron' content='Previous' onClick={() => this.props.decreasePageNumber()}/>
						<Button labelPosition='right' icon='right chevron' content='Next' onClick={() => this.props.increasePageNumber()}/>
					</Button.Group>
	      </div>
    	)
	  }
}

export default RecipeContainer

// <Search onChange={(event) => this.props.handleSearch(event)} showNoResults={false}/>


// <CardContainer onSearchChange={this.props.handleSearch} recipeItems={this.props.recipeItems} renderRecipeAttributes={this.props.renderRecipeAttributes} />
