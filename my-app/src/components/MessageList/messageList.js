import React from 'react';
import { MessageItem } from '../MessageItem/messageItem';
import './messageList.css';

export const MessageList = (props) => {
  return(
    <ul>
      {props.messages.map(message => {
        return <MessageItem message = {message}/>
      })} 
    </ul>
  )
}