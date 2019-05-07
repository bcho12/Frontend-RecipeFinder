import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter} from 'react-router-dom';
import Login from './components/Login.js'
import Home from './components/Home.js'
import RecipePage from './components/RecipePage.js'
import './index.css';
import {fetchTitle} from './services/backend.js'


// const Title = () => <h1 className="title">Recipe Finder</h1
class App extends Component {

		state = {
			currentUserId: null,
			userInfo: null,
			recipeItems: [],
			recipeItem: null,
			searchEntry: '',
			pageNumber: 1
	  }


	componentDidMount() {
		fetch(`http://localhost:3000/fetch`, {
			method: "GET",
			headers: new Headers({
				'title': "",
				'pageNumber': 1
		})})
			.then(response => response.json())
			.then(recipe => {
				console.log(recipe)
				this.setState({
				recipeItems: recipe.results,
				pageNumber: 1
			})
		})
	}

	renderRecipeAttributes = (recipe) => {

		this.setState({
			recipeItem: recipe
		},() => {
			this.props.history.push('/recipepage')
			// console.log(this.state.recipeItem)
	})
		// <Redirect to="/recipepage" />
		// {this.state.recipeItem != null ? <Redirect to="/recipepage" /> : null}
		// <Redirect push to="/recipepage" />
	}

	setCurrentUser = (user_id) => {
		this.setState({
			currentUserId: user_id
		})
	}

	setUserInfo = (data) => {
		this.setState({
			userInfo: data
		})
	}

	handleSearch = (e) => {
		this.setState({
			searchEntry: e.target.value,
		})
		fetchTitle(e.target.value).then(data => {
			this.setState({
				recipeItems: data.results
	    })
		})
  }

	decreasePageNumber = () => {
		this.setState({
			pageNumber: this.state.pageNumber - 1
		}, () =>{
			console.log("pagenumber",this.state.pageNumber)

			fetchTitle(this.state.searchEntry, this.state.pageNumber).then(data => {
				this.setState({
					recipeItems: data.results
		    })})
		} )
	}

	increasePageNumber = () => {
		this.setState({
			pageNumber: this.state.pageNumber + 1
		}, () => {
			console.log("pagenumber",this.state.pageNumber)
			fetchTitle(this.state.searchEntry, this.state.pageNumber).then(data => {
				this.setState({
					recipeItems: data.results
		    })})
		})
	}

	render() {
		console.log(this.state)
	    return (
	      <Switch>
					<Route exact path='/'
						render={(props) => (localStorage.getItem('token') ? <Home {...props} handleSearch={this.handleSearch} decreasePageNumber={this.decreasePageNumber} increasePageNumber={this.increasePageNumber} recipeItems={this.state.recipeItems} renderRecipeAttributes={this.renderRecipeAttributes}  /> : <Login {...props} setCurrentUser={this.setCurrentUser} setUserInfo={this.setUserInfo}/> )} />
					<Route exact path='/login'
						render={(props) => (localStorage.getItem('token') ? <Home {...props} handleSearch={this.handleSearch} decreasePageNumber={this.decreasePageNumber} increasePageNumber={this.increasePageNumber} recipeItems={this.state.recipeItems} renderRecipeAttributes={this.renderRecipeAttributes}  /> : <Login {...props} setCurrentUser={this.setCurrentUser} setUserInfo={this.setUserInfo}/> )} />
					<Route exact path="/home"
						render={(props) => (localStorage.getItem('token') ? <Home {...props} handleSearch={this.handleSearch} decreasePageNumber={this.decreasePageNumber} increasePageNumber={this.increasePageNumber} recipeItems={this.state.recipeItems} renderRecipeAttributes={this.renderRecipeAttributes}  /> : <Login {...props} setCurrentUser={this.setCurrentUser} setUserInfo={this.setUserInfo}/> )} />
					<Route exact path='/recipepage'
						render={(props) => (<RecipePage {...props} recipeItem={this.state.recipeItem} />)} />
				</Switch>
			)
	}
}


export default withRouter(App);
// export default App;


// render() {
// 	return (
// 		<Router>
// 			<div className="Component-Bg">
// 			<React.Fragment>
// 				<Title />
// 				<Route exact path="/(login)"
// 							 render={(props) => (<Login {...props} userName={this.state.user.username} />)} />
// 				<Route exact path="/index"
// 							 render={(props) => (<Index {...props} userName={this.state.user.username} />)} />
// 			</React.Fragment>
// 			</div>
// 		</Router>
// 	);
// }
// }


// <Route exact path="/index"
//        render={(props) => (<Index {...props} userId={this.state.user.id}
//                                              userName={this.state.user.username} />)} />
// <Route exact path="/profile"
//        render={(props) => (<Profile {...props} userId={this.state.user.id}
//                                                userName={this.state.user.username} />)} />
