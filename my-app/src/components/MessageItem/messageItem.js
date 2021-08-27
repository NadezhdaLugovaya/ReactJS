import React from 'react';
import './messageItem.css';

export const MessageItem = ({message}) => {
  const classes = [];
  if (message.author === 'user'){
    classes.push('user-message');
  } else {
    classes.push('robot-message');
  }
  return (
    <li className = {classes.join(' ')}>
     <span>{message.text}</span> 
    </li>
  )
}