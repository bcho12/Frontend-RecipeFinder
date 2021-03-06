import React, { Component } from 'react'
import { Redirect } from 'react-router'
import '../index.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { getAuthToken, addNewUser, getUserInfo, getFavorites } from '../services/backend';
import Title from './Title';

class Login extends Component {

  // handleLoginSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.handleLogin(e.target.name.value)
  // }
	//
  // handleSignupSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.handleSignup(e.target.name.value)
  // }

	constructor() {
        super()

        this.state = {
            name: '',
            password: '',
            newName: '',
            newPassword: '',
						loggedin: false
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     addNewUser(this.state.newName, this.state.newPassword)
    //         .then(getAuthToken({ username: this.state.newName, password: this.state.newPassword }))
    //         .then(payload => {
    //             if (payload.user) {
    //                 localStorage.setItem('token', payload.jwt)
		// 								this.props.history.push('/home')
		// 								this.props.setCurrentUser(payload.user.id)
    //                 getUserInfo(payload.user.id)
    //                     .then(data => this.props.setUserInfo(data))
		// 								console.log('Success')
    //             } else {
    //                 alert('That username is already taken!')
    //             }
    //         })
    //     this.setState({
    //         newName: '',
    //         newPassword: ''
    //     })
    // }

		handleSignIn = (event) => {
      event.preventDefault()
			addNewUser(this.state.newName, this.state.newPassword)
      .then(res => {
         if (res.errors) {
            alert("Sorry, the username has already been taken.")
         } else {
            getAuthToken({ username: this.state.newName, password: this.state.newPassword})
            .then(payload => {
               localStorage.setItem('token', payload.jwt)
               this.props.history.push('/home')
               this.props.setCurrentUser(payload.user.id)
               })
            .then(this.setState({
               newName: '',
               newPassword: ''
            }))
         }
      })
   }

    handleLogin = event => {
        event.preventDefault();
        getAuthToken({ username: this.state.name, password: this.state.password })
            .then(payload => {
                if (payload.user) {
                    localStorage.setItem('token', payload.jwt)
										this.props.setCurrentUser(payload.user.id)
                    getUserInfo(payload.user.id)
                    .then(data => this.props.setUserInfo(data))
										.then(() => this.props.history.push('/home'))
										getFavorites(payload.user.id.toString())
										.then(data => this.props.setUserFavorites(data.recipes))
		            } else {
		                alert("Invalid login!")
		            }
        })
    }

  render() {
      return (
				<div className=".loginPage">
					<Title />
	        <div className="login-container">
	          <div className="login-form">
		          <Form onSubmit={this.handleLogin}>
		            <Form.Group controlId="formBasicName">
		              <Form.Label><h3>Login</h3></Form.Label>
		              <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} />
									<Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
		              <br />
		              <Button variant="success" type="submit" onClick={() => this.props.sendUserName(this.state.name)}>Login</Button>
		            </Form.Group>
		          </Form>
	          </div>

	        <div className="signup-form">
	          <Form onSubmit={this.handleSignIn}>
	          <Form.Group controlId="formBasicSignUp">
	            <Form.Label><h3>Sign Up</h3></Form.Label>
	            <Form.Control type="text" placeholder="Name" name="newName" onChange={this.handleChange} />
							<Form.Control type="password" placeholder="Password" name="newPassword" onChange={this.handleChange} />
	            <br />
	            <Button variant="success" type="submit">Sign Up</Button>
	          </Form.Group>
	        </Form>
	        </div>
	      </div>
			</div>
      )
    }
  }


export default Login

// if (this.props.userId) {
//   return (<Redirect to="/index" />)
// } else {
