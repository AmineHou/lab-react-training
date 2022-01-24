import React from 'react';

const Random = (props) => {
  let min = props.min;
  let max = props.max;

  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return <p>{randomValue}</p>;
};

export default Random;
