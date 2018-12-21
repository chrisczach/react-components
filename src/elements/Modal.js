import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition, animated, interpolate } from 'react-spring';

import {Portal, absolute} from 'utilities';
import Icon from './Icon';
import {Card} from './Cards';

export default function Modal(props) {
  const { shown, toggle, children } = props;
  return (
    <Portal>
            <Transition
            //native
  items={shown}
  from={{ opacity: 0, y: -50, cardScale: 'scale(0.5)', cardOpacity: .5}}
  enter={{ opacity: .8, y:0, cardScale: 'scale(1)', cardOpacity: 1}}
  leave={{ opacity: 0, y: -300, cardScale: 'scale(1), ', cardOpacity: 0}}>
      {shown=> styles => shown && (
        <ModalWrapper >
          <Background style={{opacity: styles.opacity}}onClick={toggle} />
          <ModalCard  style={{
            transform: `translateY(${styles.y}%)`,
            opacity: styles.cardOpacity
            }}>

            <CloseButton onClick={toggle}><Icon color={'blue'} name={'close'} /></CloseButton>
            <div>{children}</div>
          </ModalCard>
        </ModalWrapper>
      )}
      </Transition>
    </Portal>
  );
}

const ModalWrapper = styled(animated.div)`
  ${absolute()}
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimCard = Card.withComponent(animated.div);

const ModalCard = styled(AnimCard)`
  position: relative;
  background: white;
  padding: 15px;
`;

const CloseButton = styled(animated.button)`
padding: 10px;
  ${absolute({x: 'top', y: 'right'})}
  border: none;
  background: transparent;
`;
const Background = styled(animated.div)`
${absolute()}
  width: 100%;
  height: 100%;
  background: black;
`;
