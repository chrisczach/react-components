import React, { Component, } from 'react';
import UserContext from './UserContext';

const initialState = {
  id: '123',
  name: 'bob',
  email: 'bob@bob.com'
}

export default class UserProvider extends Component {
  state = initialState;

  login=()=>this.setState({...initialState});
  logout =() => this.setState({id: null, name: null, email: null});
  render(){
    return(
    <UserContext.Provider value={{user: this.state, logout: this.logout, login: this.login}} >
      {this.props.children}
    </UserContext.Provider>
)
  }

}