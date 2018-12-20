import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';
import Icon from './Icon';

export default function Modal(props) {
  const { shown, toggle, children } = props;
  return (
    <Portal>
      {shown && (
        <ModalWrapper>
          <Background onClick={toggle} />
          <ModalCard>
            <CloseButton onClick={toggle}><Icon color={'blue'} name={'close'} /></CloseButton>
            <div>{children}</div>
          </ModalCard>
        </ModalWrapper>
      )}
    </Portal>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 30px #444;
  padding: 15px;
`;

const CloseButton = styled.button`
padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
`;
const Background = styled.div`
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
`;
