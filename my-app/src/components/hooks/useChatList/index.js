import { useState } from 'react';

export const useChatList = () => {
  const [chatList, setChatList] = useState([
    {id: 1, name: 'Ivan'},
    {id:2, name: 'Nady'}
  ]);
  const addChat = (name) => {
    setChatList(
      chatList.concat([
        {
          id: Date.now(),
          name: name
        }
      ])
    )
  };
  return {
    addChat,
    chatList
  };
}