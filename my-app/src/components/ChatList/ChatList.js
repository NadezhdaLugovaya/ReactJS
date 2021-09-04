import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import {ChatItem} from '../ChatItem/ChatItem';


export const ChatList = (props) => {
  
  return(
    <List >
      {props.chats.map(chat => {
        return <ChatItem chat = {chat} key = {chat.id}/>
      })} 
    </List>
  );
}

ChatList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired
};