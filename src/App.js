import React, { Component } from 'react';
import Toggle from './utilities/Toggle';
import Portal from './utilities/Portal';
import Modal from './utilities/Modal';


class App extends Component {
  render() {
    return (
      <>
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
                <Modal toggle={toggle} shown={shown} >
                <h1>Testing</h1>
              </Modal>
                </>
            );
          }}
        </Toggle>
      </>
    );
  }
}

export default App;
