import React, { Component } from 'react';

const FilterLink = (props) => {

  return (
    <a  
      href="#" 
      onClick={() => {props.setFilter(props.filter)}}
    >{props.child}</a>
  );
}


export default FilterLink;