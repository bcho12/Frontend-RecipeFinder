import React, { Component } from 'react'
import FavoritesCard from './FavoritesCard'

class FavoritesContainer extends Component {

	  render() {
	      return (
	        <div className="favoritesContainer">
						Favorites
	          <FavoritesCard />
	        </div>
	      )
	    }
	  }

export default FavoritesContainer
