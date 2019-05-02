import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import CardHeader from './CardHeader'

class CardContainer extends Component {

	  render() {
	      return (
	        <div className="recipe-container">
						<CardHeader />
						{this.props.recipeItems.map(r => <RecipeCard recipeItem={r} />)}
	        </div>
	      )
	    }
	  }

export default CardContainer
