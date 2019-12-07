import React from 'react';
import { pathFromBezierCurve } from '../../utils/formulas';

const CannonBase = (props) => {
  const cannonBaseStyle = {
    fill: '#a16012',
    stroke: '#75450e',
    strokeWidth: '2px',
  };

  const baseWith = 80;
  const halfBase = 40;
  const height = 60;
  const negativeHeight = height * -1;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfBase,
      y: height,
    },
    initialControlPoint: {
      x: 20,
      y: negativeHeight,
    },
    endingControlPoint: {
      x: 60,
      y: negativeHeight,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };
  const tempStyle={
    fill:'#fff',
    transform:'rotateZ(270deg)'
  }

  const carStyle=
  {
   
  }
  return (
    <svg version="1.1" id="Capa_1"  x="-50px" y="-100px" height="200" width="200" style={tempStyle} >
</svg>

  );
};

export default CannonBase;
