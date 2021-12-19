import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";  
import { useContext } from "react";
import { AuthConsumer, AuthContext } from "../providers/AuthProvider";

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   renderAuthLinks = () => {
    if(this.props.auth.authenticated) {
      return  <button onClick={this.props.handleLogout}> Logout </button>
      }
    return (
      <>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">Register</Link>
      </Menu.Item>
      </>
    ) }

  render() {
    const { activeItem } = this.state
    

  return ( 
    
    <Menu >
      <Link to="/">
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick} >
            Home
          </Menu.Item>
      </Link>
      <Link to="/protected">
          <Menu.Item
            name='protected'
            active={activeItem === 'protected'}
            onClick={this.handleItemClick} >
            Protected
          </Menu.Item>
          </Link>

          {this.renderAuthLinks()}
        
    </Menu>
   
  );
};
};

const connectedNavbar = (props) => {
  return (
    <AuthConsumer>
      {(auth)=>(<Navbar auth={auth} {...props}/>)}
    </AuthConsumer>
  );
}

export default connectedNavbar;