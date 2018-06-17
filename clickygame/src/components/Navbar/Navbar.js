import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar">
    <div className="row">
      <div className="col-sm 4">Clicky Game</div>
      <div className="col-sm 4">Click on Image</div>
      <div className="col-sm 4">
        Score: {props.score} | High Score: {props.highscore}
      </div>
    </div>
  </div>
);
export default Navbar;
