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










import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login.js'
// import SignUp from './components/Signup.js'
import Home from './components/Home.js'
import RecipePage from './components/RecipePage.js'
import './index.css';


const Title = () => <h1 className="title">Recipe Finder</h1>

class App extends Component {

	render() {
	    return (
	      <Router>
					<Title />
					<Route exact path='/login' component={Login} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/recipes/:id' component={RecipePage} />
				</Router>
			)
	}
}
// render() {
// 		return (
// 			<div id='app-container'>
// 					<Router>
// 							<Switch>
// 									<Route exact path='/login' render={(props) => {return !localStorage.getItem('token') ? <Login {...props} /> : <Redirect to='/' /> }} />
// 									<Route exact path='/signup' render={(props) => {return !localStorage.getItem('token') ? <SignUp {...props} /> : <Redirect to='/' /> }} />
// 									<Route exact path='/' render={(props) => {return localStorage.getItem('token') ? <Home {...props} /> : <Redirect to='/login' /> }} />
// 									<Route exact path='/recipe' render={(props) => {return localStorage.getItem('token') ? <RecipePage {...props} /> : <Redirect to='/login' /> }} />
// 							</Switch>
// 					</Router>
// 			</div>
// 		)
// }
// }



export default App;


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
