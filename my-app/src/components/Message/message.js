import React from 'react';
import './message.css';

export const Message = (props) => {
  return(
    <p className='message' >{props.label} </p>
  )
}