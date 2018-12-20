import React, { Component } from 'react';
import styled from 'styled-components';
import {Portal, absolute} from 'utilities';
import Icon from './Icon';
import {Card} from './Cards';

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
  ${absolute()}
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  background: white;
  padding: 15px;
`;

const CloseButton = styled.button`
padding: 10px;
  ${absolute({x: 'top', y: 'right'})}
  border: none;
  background: transparent;
`;
const Background = styled.div`
  opacity: 0.8;
${absolute()}
  width: 100%;
  height: 100%;
  background: black;
`;
