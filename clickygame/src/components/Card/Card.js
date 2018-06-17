import React from 'react';
import './Card.css';

const Card = props => (
  <div className="card">
    <img
      className="card-img-top"
      src={props.image}
      onClick={event => props.onClick(event)}
      alt="Card image cap"
    />
  </div>
);

export default Card;
