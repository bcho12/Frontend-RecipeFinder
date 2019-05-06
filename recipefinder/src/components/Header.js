import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header">
				 <img src='https://static.thenounproject.com/png/630729-200.png' alt="My Profile" height="60px" />
				 <br />
					<Link to='/login' onClick={() => localStorage.clear()}>
						<Button className="logout" variant="success">Logout</Button>
					</Link>
			</div>
		)
	}
}

export default Header
