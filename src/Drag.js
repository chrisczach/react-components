import React, { Component } from 'react';
import { Card } from 'elements';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';

export default class Drag extends Component {
  render() {
    return (
      <Gesture>
        {({ down, x, y, xDelta, yDelta, xInitial, yInitial }) => (
          <Spring
            native
            immediate={name => down && name === 'x'}
            to={{
              x: down ? xDelta : 0
            }}>
            {({ x }) => (
              <AnimCard
                style={{
                  transform: x.interpolate(x => `translateX(${x}px)`)
                }}>
                <div>
                  <h1>Drag me</h1>
                </div>
              </AnimCard>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}

const AnimCard = Card.withComponent(animated.div);
