import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import Header from './Header'
import BodyContainer from './BodyContainer'

class Home extends Component {

  state = {
		header: "Hi",
		bodycontainer: "Bye"
    // favoriteId: null
  }

	  render() {
	      return (
	        <div>
	          <Header />
						<BodyContainer />
	        </div>
	      )
	    }
	  }

export default Home

// <Header header={this.state.header}/>
// <BodyContainer bodycontainer={this.state.bodycontainer} />

// {!this.props.userId ? <Redirect push to="/login" /> : null} suppose to be in line after first <div>
