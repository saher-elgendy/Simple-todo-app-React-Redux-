import React, { Component } from 'react';

const FilterLink = (props) => {
  const {setFilter, filter, child} = props;

  return (
    <a  
      href="#" 
      onClick={() => {setFilter(filter)}}
    >{child}</a>
  );
}


export default FilterLink;