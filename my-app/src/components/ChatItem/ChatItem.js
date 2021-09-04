import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


export const ChatItem = ({chat}) => {
  return (
    <ListItem button >
      <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
     <ListItemText>{chat.name}</ListItemText> 
    </ListItem>
  );
}

ChatItem.propTypes = {
  chat: PropTypes.object.isRequired
};