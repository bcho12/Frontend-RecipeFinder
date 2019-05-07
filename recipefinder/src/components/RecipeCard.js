import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Card, Button } from 'react-bootstrap';
var x = null;

// if (this.props.recipeItem.thumbnail !== "") {
// 	x = this.props.recipeItem.thumbnail
// }
// else {
// 	x = "https://previews.123rf.com/images/bdcollins/bdcollins1408/bdcollins140800228/30927502-random-foods-collage-isolated-over-white.jpg"
// }
class RecipeCard extends Component {

	if (this.props.recipeItem.thumbnail !== "") {
		x = this.props.recipeItem.thumbnail
	}
	else {
		x = "https://previews.123rf.com/images/bdcollins/bdcollins1408/bdcollins140800228/30927502-random-foods-collage-isolated-over-white.jpg"
	}

	  render() {
			// console.log(this.props.recipeItem)
	      return (
	        <div className="eachCard align-items-stretch">
						<Card style={{ width: '12rem', 'max-height': '86%' }}>
  						<Card.Img variant="top" src={x} onClick={() => this.props.renderRecipeAttributes(this.props.recipeItem)}/>
  						<Card.Body>
    						<Card.Title onClick={() => this.props.renderRecipeAttributes(this.props.recipeItem)}>{this.props.recipeItem.title}</Card.Title>
						    <Button variant="success">Add to Favorites</Button>
						  </Card.Body>
						</Card>
					</div>
	      )
	    }
	  }

export default withRouter(RecipeCard)
// <div className="eachCard col-md-3 d-flex align-items-stretch">

// <img src={this.props.recipeItem.thumbnail}
// 	onClick={() => this.props.renderRecipeAttributes(this.props.recipeItem)}/>
// <button onClick={}>Add to Favorites</button>
