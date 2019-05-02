import React, { Component } from 'react'

class RecipeCard extends Component {

	  render() {
			console.log(this.props.recipeItem)
	      return (
	        <div>
						<img src={this.props.recipeItem.thumbnail}/>
	        </div>
	      )
	    }
	  }

export default RecipeCard
