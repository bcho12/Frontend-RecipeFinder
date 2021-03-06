import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import Header from './Header'
import BodyContainer from './BodyContainer'
import Title from './Title';


class Home extends Component {

	  render() {
	      return (
	        <div>
						<Title />
	          <Header username={this.props.username}/>
						<BodyContainer handleSearch={this.props.handleSearch} setUserFavorites={this.props.setUserFavorites} currentUserId={this.props.currentUserId} userFavorites={this.props.userFavorites} handleFavorites={this.props.handleFavorites} decreasePageNumber={this.props.decreasePageNumber} increasePageNumber={this.props.increasePageNumber} recipeItems={this.props.recipeItems} renderRecipeAttributes={this.props.renderRecipeAttributes} />
	        </div>
	      )
	    }
	  }

export default Home

// <Header header={this.state.header}/>
// <BodyContainer bodycontainer={this.state.bodycontainer} />

// {!this.props.userId ? <Redirect push to="/login" /> : null} suppose to be in line after first <div>
