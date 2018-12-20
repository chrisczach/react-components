import React, { Component, createContext } from 'react';

export const UserContext=createContext();

export default class UserProvider extends Component {
  state = {
    id: '123',
    name: 'bob',
    email: 'bob@bob.com'
  }
  render(){
    return(
    <UserContext.Provider value={{user: this.state}}>
      {this.props.children}
    </UserContext.Provider>
)
  }

}