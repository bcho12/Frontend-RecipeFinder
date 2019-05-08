import React, { Component } from 'react'
import FavoritesCard from './FavoritesCard'

const Favorites = () => <h2 className="Favorites">Favorites</h2>

class FavoritesContainer extends Component {

	  render() {
	      return (
	        <div className="favoritesContainer">
						<Favorites />
						{this.props.userFavorites.map(uF => <FavoritesCard userFavorites={uF} setUserFavorites={this.props.setUserFavorites} currentUserId={this.props.currentUserId} />)}
	        </div>
	      )
	    }
	  }

export default FavoritesContainer

// <FavoritesCard userFavorites={this.props.userFavorites} />
