import { useState } from 'react';

export const useAddMessage = () => {
  const [messageList, setMessageList] = useState([]);

  const addMessage = (title, name = 'user') => {
    setMessageList(
      messageList.concat([
        {
          id: Date.now(),
          text: title,
          author: name
        }
      ])
    )
  };
  return {
    messageList,
    addMessage
  };
}