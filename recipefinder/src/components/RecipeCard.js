import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Card, Button } from 'react-bootstrap';

class RecipeCard extends Component {

	  render() {
			// console.log(this.props.recipeItem)
	      return (
	        <div className="col-lg-3 d-flex align-items-stretch">
						<Card style={{ width: '8rem' }}>
  						<Card.Img variant="top" src={this.props.recipeItem.thumbnail} onClick={() => this.props.renderRecipeAttributes(this.props.recipeItem)}/>
  						<Card.Body>
    						<Card.Title>{this.props.recipeItem.title}</Card.Title>
						    <Button variant="success">Add to Favorites</Button>
						  </Card.Body>
						</Card>
					</div>
	      )
	    }
	  }

export default withRouter(RecipeCard)

// <img src={this.props.recipeItem.thumbnail}
// 	onClick={() => this.props.renderRecipeAttributes(this.props.recipeItem)}/>
// <button onClick={}>Add to Favorites</button>
