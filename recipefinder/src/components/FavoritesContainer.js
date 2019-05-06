import React, { Component } from 'react'
import FavoritesCard from './FavoritesCard'

const Favorites = () => <h2 className="Favorites">Favorites</h2>

class FavoritesContainer extends Component {

	  render() {
	      return (
	        <div className="favoritesContainer">
						<Favorites />
	          <FavoritesCard />
	        </div>
	      )
	    }
	  }

export default FavoritesContainer
