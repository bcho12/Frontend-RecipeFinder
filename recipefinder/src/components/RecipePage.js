import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Title from './Title';
// import Header from './Header'
// import BodyContainer from './BodyContainer'

class RecipePage extends Component {

	  render() {
			console.log(this.props.recipeItem)
			return (
				<div className="recipe-page">
					<Title />
					Title: {this.props.recipeItem.title}
					<img src={this.props.recipeItem.thumbnail} />
					Ingredients: {this.props.recipeItem.ingredients}
					Website: {this.props.recipeItem.href}
				</div>
			)
	  }
	}


export default withRouter(RecipePage)

// render() {
// 	console.log(this.props.recipeItem)
// 	if (this.props.recipeItem != null) {
// 			return (
// 				<div>
// 				 Hi
// 				</div>
// 			)
// 		} else {
// 			return (
// 				<div>
// 				 No props bruh
// 				</div>
// 			)
// 	}
// }
// }
