import React from 'react';

const IdCard = (props) => {
  console.log(props, 'propsCard component props');

  return (
    <div className="card">
      <img src={props.picture} alt={props.lastName} />
      <p>{props.lastName}</p>
      <p>{props.firstName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.birth}</p>
    </div>
  );
};

export default IdCard;
