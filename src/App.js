import React, { Component, createContext } from 'react';
import { Transition } from 'react-spring'

import { Toggle, Portal } from 'utilities';
import { Modal, Card } from 'elements';
import User from './user/User';
import UserProvider from './user/UserProvider';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Toggle>
          {(shown, toggleShown) =>  (
              < >
                <button onClick={toggleShown}>Show/Hide</button>
                <Transition
  items={shown}
  from={{ opacity: 0, background: 'white' , height: '0px'}}
  enter={{ opacity: 1,  background: 'teal' ,height: '200px' }}
  leave={{ opacity: 0, background: 'white' ,height: '0px' }}>
  {show =>  show && Header}
</Transition>
              </>
            )
        }
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

const Header = style => (<Card style={style}><h1>Show Me</h1></Card>)
