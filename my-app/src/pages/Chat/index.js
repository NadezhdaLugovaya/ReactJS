import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';

import {useAddMessage} from '../../components/hooks/useAddMessage';
import {useAnswer} from '../../components/hooks/useAnswer';
import {MessageList} from '../../components/MessageList/messageList';
import {AddMessage} from '../../components/AddMessage/addMessage';

export const Chat = ({chats}) => {
  const {chatId} = useParams();

  const message = useAddMessage();
  const answer = useAnswer(()=>{
    const lastMessage = message.messageList[message.messageList.length - 1]
    if(lastMessage.author ===  'user'){
      message.addMessage('Привествую!', 'robot');
    }
  },[message.messageList]);
  
  const currentChat = chats?.find(({id}) => id === chatId); 
  if(!currentChat){
    return <Redirect to = '/chats'/>
  }
  
    return (
    <div>
      <h1>
        {currentChat.name}
      </h1>
      <div className = "message">
          <MessageList messages = {message.messageList} />
          <AddMessage onSubmit = {message.addMessage}/>
      </div> 
    </div>
  );
}

Chat.propTypes = {
  message: PropTypes.array.isRequired
};