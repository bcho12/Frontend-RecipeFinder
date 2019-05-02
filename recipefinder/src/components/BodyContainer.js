import React, { Component } from 'react'
import Favorites from './Favorites'
import CardContainer from './CardContainer'

class BodyContainer extends Component {

  state = {
		recipeItems: []
  }

	componentDidMount() {
		fetch(`http://localhost:3000/fetch`)
			.then(response => response.json())
			.then(data => this.setState({
				recipeItems: data.results
			}))
	}

	  render() {
	      return (
	        <div>
	          <CardContainer recipeItems={this.state.recipeItems}/>
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
