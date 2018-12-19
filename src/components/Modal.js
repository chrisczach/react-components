import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';


export default class Modal extends Component {
  render() {
   const {shown, toggle, children} = this.props;

    return <Portal>
      {shown &&
            <ModalWrapper>
            <button onClick={toggle}>Close</button>
              <div>{children}</div>
          </ModalWrapper>
      }

    </Portal>;
  }
}

const ModalWrapper = styled.div`
position: absolute;
background-color: teal;
top: 0;
left: 0;
height: 100%;
width: 100%;
`