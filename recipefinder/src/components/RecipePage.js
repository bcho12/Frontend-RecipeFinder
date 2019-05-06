import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
// import Header from './Header'
// import BodyContainer from './BodyContainer'

class RecipePage extends Component {

	  render() {
			console.log(this.props.recipeItem)
			return (
				<div className="recipePage">
					<h1>{this.props.recipeItem.title}</h1>
					<br />
					<img src={this.props.recipeItem.thumbnail} width="150" height="150"/>
					<br />
					<br />
					<h2>Ingredients: {this.props.recipeItem.ingredients}</h2>
					<br />
					<h2> <a href={this.props.recipeItem.href}>Instructions and Reviews</a> </h2>
					<br />
					<br />
					<br />
					<br />
					<NavLink to="/home">
					<div className="btn-holder">
						<Button variant="success">Back to Home</Button>
					</div>
				</NavLink>
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
