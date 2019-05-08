import React, { Component } from 'react'
import {deleteFavorite, getFavorites} from '../services/backend.js'

class FavoritesCard extends Component {

		handleClick = () => {
			console.log("Hi")
			deleteFavorite(this.props.currentUserId, this.props.userFavorites.id)
			.then(() => getFavorites(this.props.currentUserId))
			.then(data => this.props.setUserFavorites(data.recipes))
		}

	  render() {
			console.log(this.props.userFavorites.title,this.props.userFavorites.id, this.props.currentUserId)
	      return (
	        <div>
						{this.props.userFavorites.title}
						<br />
						<img src={this.props.userFavorites.thumbnail} alt="recipe" height='100px' width='100px' className="recipe-image" />
						<br />
						<button onClick={this.handleClick}>Delete</button>
	        </div>
	      )
	    }
	  }

export default FavoritesCard

// {this.props.userFavorites}
// {this.props.userFavorites[0].thumbnail}
