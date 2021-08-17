import React from 'react';
import './message.css';

export const Message = (props) => {
  return(
    <span className='message' >{props.label} </span>
  )
}