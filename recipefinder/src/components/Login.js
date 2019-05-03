import React, { Component } from 'react'
import { Redirect } from 'react-router'
import '../index.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { getAuthToken, addNewUser, getUserInfo } from '../services/backend';
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

		handleSubmit = (event) => {
      event.preventDefault()
			addNewUser(this.state.newName, this.state.newPassword)
      .then(res => {
         if (res.errors) {
            alert("sorry, username has already been taken")
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
			// this.setState({
			// 	loggedin: true
			// })
        event.preventDefault();
        getAuthToken({ username: this.state.name, password: this.state.password })
            .then(payload => {
                if (payload.user) {
                    localStorage.setItem('token', payload.jwt);
										this.props.history.push('/home');
										this.props.setCurrentUser(payload.user.id)
                    getUserInfo(payload.user.id)
                        .then(data => this.props.setUserInfo(data))
                        // .then(data => this.props.addToFavorites(data.tastes))
                    // this.props.changeLogin(true)
            } else {
                alert("Invalid login!")
            }
        })
    }

  render() {
		// console.log(this.state)
      return (
				<div className=".loginPage">
					<Title />
	        <div className="login-container">
	          <div className="login-form">
	          <Form onSubmit={this.handleLogin}>
	            <Form.Group controlId="formBasicName">
	              <Form.Label>Login</Form.Label>
	              <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} />
								<Form.Control type="text" placeholder="Password" name="password" onChange={this.handleChange} />
	              <br />
	              <Button variant="primary" type="submit">Login</Button>
	            </Form.Group>
	          </Form>
	          </div>

	        <div className="signup-form">
	          <Form onSubmit={this.handleSubmit}>
	          <Form.Group controlId="formBasicSignUp">
	            <Form.Label>Sign Up</Form.Label>
	            <Form.Control type="text" placeholder="Name" name="newName" onChange={this.handleChange} />
							<Form.Control type="text" placeholder="Password" name="newPassword" onChange={this.handleChange} />
	            <br />
	            <Button variant="primary" type="submit">Sign Up</Button>
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
