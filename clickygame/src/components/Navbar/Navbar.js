import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="nav d-inline-flex justify-content-center bd-highlight">
    <div className="row">
      <div className="col-sm 4">Clicky Game</div>
      <div className="col-sm 4">Click on Image</div>
      <div className="col-sm 4 align-left">
        Score: {props.score} | High Score: {props.highscore}
      </div>
    </div>
  </div>
);
export default Navbar;
