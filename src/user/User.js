import React, { Component } from 'react'
import UserContext  from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
      <div>
      <h1>User Info: {context.user.name}</h1>
      <button onClick={context.login}>Log in</button>
      <button onClick={context.logout}>Log out</button>
    </div>
        )}

      </UserContext.Consumer>
    )
  }
}
