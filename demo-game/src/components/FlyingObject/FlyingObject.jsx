import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FlyingObjectBase from '../FlyingObjectBase/FlyingObjectBase';
import FlyingObjectTop from '../FlyingObjectTop/FlyingObjectTop';
import { gameHeight, viewBox } from '../../utils/constans';

const moveVertically = keyframes`
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(${gameHeight-200}px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`;

const stripes= {
  fill:   "#fff",
}

const FlyingObject = props => (
  <Move>
    {/* <FlyingObjectBase position={props.position} />
    <FlyingObjectTop position={props.position} /> */}
    <g>
      <rect
      x={-15}
      y={350-gameHeight}
      width={30}
      height={100}
      style={stripes}
      
      
      
      />
    
    </g>
  </Move>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject;
