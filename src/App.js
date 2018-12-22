import React, { Component, createContext } from 'react';
import { Transition, animated, interpolate } from 'react-spring';

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
              <div >
                <button onClick={toggleShown}>Show/Hide</button>
               
                <Transition
                native
  items={shown}
  from={{ opacity: 0, background: 'white' , height: '0px'}}
  enter={{ opacity: 1,  background: 'teal' ,height: '200px' }}
  leave={{ opacity: 0, background: 'white' ,height: '0px' }}>
  
  {show =>  show && Header}
</Transition>

              </div>
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


const Header = style => (
<Card style={style}><h1>Height: {style.height}</h1></Card>
)
