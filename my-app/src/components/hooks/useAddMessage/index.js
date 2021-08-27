import React, { useState } from 'react';

export const useAddMessage = () => {
  const [messageList, setMessageList] = useState([]);

  const addMessage = (title, name = 'user') => {
    setMessageList(
      messageList.concat([
        {
          text: title,
          author: name
        }
      ])
    )
  }
  return {
    messageList,
    addMessage
  }
}