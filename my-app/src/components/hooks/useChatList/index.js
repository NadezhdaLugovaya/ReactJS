import { useState } from 'react';

export const useChatList = () => {
  const [chatList, setChatList] = useState([]);
  // const addChat = (name) => {
  //   setChatList(
  //     chatList.concat([
  //       {
  //         id: Date.now(),
  //         name: name
  //       }
  //     ])
  //   )
  // };
  return {
    // addChat,
    setChatList,
    chatList
  };
}