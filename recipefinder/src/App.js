// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Login from './components/Login.js'
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import LoginPage from './components/Login/LoginPage';
// import MainPage from './components/Main/MainPage';

// import './App.css';
// import { fetchIngredients } from './services/backend.js'
//
// class App extends Component {
//
// 	handleSearch = (event) => {
// 		fetchIngredients(event.target.value).then(console.log)
// 	}
//
//   render() {
// 			fetchIngredients().then(data => console.log(data))
//    return (
// 		<div>
// 			<input onChange={(event) => this.handleSearch(event)}>
// 			</input>
// 	  </div>
            // this.props.loginSuccess ?
            //     <div className=‘App’>
            //         <MainPage />
            //     </div>
            //     :
            //     <div>
            //         <LoginPage />
            // </div>
//    );
//  }
// }

// const mapStateToProps = state => {
//     return ({
//         loginSuccess: state.loginSuccess
//     })
// }

// export default connect()(App);
// export default App;








// BrowserRouter as Router

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
	// constructor(props){
		// super(props)

		state = {
			currentUserId: null,
			userInfo: null,
			recipeItems: [],
			recipeItem: null,
			searchEntry: '',
			pageNumber: 1
	  }
	// }


	componentDidMount() {
		fetch(`http://localhost:3000/fetch`)
			.then(response => response.json())
			.then(recipe => {
				console.log(recipe)
				this.setState({
				recipeItems: recipe.results,
				// pageNumber: 1
			})
		})
	}

	renderRecipeAttributes = (recipe) => {
	  // put the currentRecipe in app State and set it based on recipe argument
		// use Redirect or history.push from react router to go to the '/recipes' path
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
		// console.log(e.target.value)
		this.setState({
			searchEntry: e.target.value,
		})
		fetchTitle(e.target.value).then(data => {
			this.setState({
				recipeItems: data.results
	    })
		})
  }

	handlePageNumber = () => {
		this.setState({
			pageNumber: this.state.pageNumber + 1
		})
		fetchTitle(this.state.searchEntry, this.state.pageNumber)
	}


	render() {
		console.log(this.state)
	    return (
	      <Switch>
					<Route exact path='/'
						render={(props) => (localStorage.getItem('token') ? <Home {...props} handleSearch={this.handleSearch} handlePageNumber={this.handlePageNumber} recipeItems={this.state.recipeItems} renderRecipeAttributes={this.renderRecipeAttributes}  /> : <Login {...props} setCurrentUser={this.setCurrentUser} setUserInfo={this.setUserInfo}/> )} />
					<Route exact path='/login'
						render={(props) => (localStorage.getItem('token') ? <Home {...props} handleSearch={this.handleSearch} handlePageNumber={this.handlePageNumber} recipeItems={this.state.recipeItems} renderRecipeAttributes={this.renderRecipeAttributes}  /> : <Login {...props} setCurrentUser={this.setCurrentUser} setUserInfo={this.setUserInfo}/> )} />
					<Route exact path="/home"
						render={(props) => (localStorage.getItem('token') ? <Home {...props} handleSearch={this.handleSearch} handlePageNumber={this.handlePageNumber} recipeItems={this.state.recipeItems} renderRecipeAttributes={this.renderRecipeAttributes}  /> : <Login {...props} setCurrentUser={this.setCurrentUser} setUserInfo={this.setUserInfo}/> )} />
					<Route exact path='/recipepage'
						render={(props) => (<RecipePage {...props} recipeItem={this.state.recipeItem} />)} />
				</Switch>
			)
	}
}



// <Route exact path='/home' component={Home} />

// render() {
// 		return (
// 			<div id='app-container'>
// 					<Router>
// 							<Switch>
// 									<Route exact path='/login' render={(props) => !localStorage.getItem('token') ? <Login {...props} /> : <Redirect to='/' /> } />
// 									<Route exact path='/signup' render={(props) => !localStorage.getItem('token') ? <SignUp {...props} /> : <Redirect to='/' /> } />
// 									<Route exact path='/' render={(props) => localStorage.getItem('token') ? <Home {...props} /> : <Redirect to='/login' /> } />
// 									<Route exact path='/recipe' render={(props) => localStorage.getItem('token') ? <RecipePage {...props} /> : <Redirect to='/login' /> } />
// 							</Switch>
// 					</Router>
// 			</div>
// 		)
// }
// }



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
