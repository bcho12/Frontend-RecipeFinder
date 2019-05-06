import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Card, Button } from 'react-bootstrap';

class RecipeCard extends Component {

	  render() {
			// console.log(this.props.recipeItem)
	      return (
	        <div className="eachCard align-items-stretch">
						<Card style={{ width: '12rem', 'max-height': '86%' }}>
  						<Card.Img variant="top" src={this.props.recipeItem.thumbnail} onClick={() => this.props.renderRecipeAttributes(this.props.recipeItem)}/>
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
