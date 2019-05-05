import React, { Component } from 'react'
import { withRouter } from 'react-router'

class RecipeCard extends Component {

	  render() {
			// console.log(this.props.recipeItem)
	      return (
	        <div>
						<img src={this.props.recipeItem.thumbnail}
							onClick={() => this.props.renderRecipeAttributes(this.props.recipeItem)}/>
	        </div>
	      )
	    }
	  }

export default withRouter(RecipeCard)
