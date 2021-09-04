import React from 'react';
import PropTypes from 'prop-types';
import { MessageItem } from '../MessageItem/messageItem';
import './messageList.css';

export const MessageList = (props) => {
  return(
    <ul>
      {props.messages.map(message => {
        return <MessageItem message = {message} key = {message.id}/>
      })} 
    </ul>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired
};