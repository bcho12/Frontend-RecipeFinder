import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import Header from './Header'
// import BodyContainer from './BodyContainer'

class RecipePage extends Component {

	  render() {
			console.log(this.props.recipeItem)
			if (this.props.recipeItem != null) {
		      return (
		        <div>
		         Hi
		        </div>
		      )
				} else {
					return (
						<div>
						 No props bruh
						</div>
					)
			}
	  }
	}


export default withRouter(RecipePage)
