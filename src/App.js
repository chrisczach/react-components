import React, { Component } from 'react';
import Toggle from './components/Toggle';
import Portal from './components/Portal';
import Modal from './components/Modal';
class App extends Component {
  render() {
    return (
<div>
<Toggle >
{  (shown, toggleShown) => {
    return(
      <div onClick={toggleShown}>
      {shown ? 'Toggle On' : 'Toggle Off'}
      </div>
    )
  }}
</Toggle>

<Portal>
  Portal Adds Div in Body as sibling of root.
</Portal>

<Toggle>
  {(shown, toggle) => {
    return(
   
        <Modal shown={shown} toggle={toggle}>
        Testing
     </Modal>)
      

    }}

</Toggle>

</div>
    )
    
  }
}

export default App;
