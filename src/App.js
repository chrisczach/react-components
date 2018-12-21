import React, { Component, createContext } from 'react';

import { Toggle, Portal } from 'utilities';
import { Modal } from 'elements';
import User from './user/User';
import UserProvider from './user/UserProvider';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Toggle>
          {(shown, toggleShown) => {
            return (
              <div onClick={toggleShown}>
                {shown ? 'Toggle On' : 'Toggle Off'}
              </div>
            );
          }}
        </Toggle>

        <Portal>Portal Adds Div in Body as sibling of root.</Portal>

        <Toggle>
          {(shown, toggle) => {
            return (
              <>
                <button onClick={toggle}>login</button>

                <Modal toggle={toggle} shown={shown}>
                  <User />
                </Modal>
              </>
            );
          }}
        </Toggle>
      </UserProvider>
    );
  }
}

export default App;
