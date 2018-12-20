import React, { Component } from 'react'
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
      <div>
      <h1>User Info: {context.user.name}</h1>
    </div>
        )}

      </UserContext.Consumer>
    )
  }
}
