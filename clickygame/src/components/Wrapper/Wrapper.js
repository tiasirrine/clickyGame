import React from 'react';
import './Wrapper.css';

const Wrapper = props => (
  <div className={`container d-flex justify-content-center flex-wrap ${props.shake}`}>
    {props.children}
  </div>
);

export default Wrapper;
