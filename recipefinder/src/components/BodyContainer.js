import React, { Component } from 'react'
import FavoritesContainer from './FavoritesContainer'
import RecipeContainer from './RecipeContainer'

class BodyContainer extends Component {

	  render() {
	      return (
	        <div className="bodyContainer">
	          <RecipeContainer handleSearch={this.props.handleSearch} handleFavorites={this.props.handleFavorites} decreasePageNumber={this.props.decreasePageNumber} increasePageNumber={this.props.increasePageNumber} recipeItems={this.props.recipeItems} renderRecipeAttributes={this.props.renderRecipeAttributes} />
						<FavoritesContainer userFavorites={this.props.userFavorites} setUserFavorites={this.props.setUserFavorites} currentUserId={this.props.currentUserId}/>
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
