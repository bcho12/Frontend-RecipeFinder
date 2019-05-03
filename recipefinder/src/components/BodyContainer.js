import React, { Component } from 'react'
import Favorites from './Favorites'
import RecipeContainer from './RecipeContainer'

class BodyContainer extends Component {

	  render() {
	      return (
	        <div className="body-container">
	          <RecipeContainer recipeItems={this.props.recipeItems} renderRecipeAttributes={this.props.renderRecipeAttributes} />
						<Favorites />
	        </div>
	      )
	    }
	  }

export default BodyContainer

// componentDidMount() {
// 	fetch(`http://localhost:3000/fetch`)
// 		.then(response => response.json())
// 		.then(data => this.setState({
// 			recipeItems: data
// 		}))
// }
