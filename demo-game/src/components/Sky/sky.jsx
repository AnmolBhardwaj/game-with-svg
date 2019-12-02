import React from 'react';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  const groundStyle = {
    fill: 'rgb(227, 170, 120)',
  };

  const skyWidth = 5000;
  const gameHeight = 1200;
  return (
    <g>
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight/4}
    />
    <rect
      style={groundStyle}
      x={skyWidth / -2}
      y={100 - gameHeight + gameHeight/4}
      width={skyWidth}
      height={3*gameHeight/4}
    />

    </g>
  );
};

export default Sky;