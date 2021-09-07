import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import {Grid} from '@material-ui/core'
import faker from 'faker';
import { useChatList } from '../../components/hooks/useChatList';
import {ChatList} from '../../components/ChatList/ChatList';
import {Chat} from '../Chat';

const createChat = () => ({
  id: faker.datatype.uuid(),
  name: faker.lorem.word()
})

export const Chats = () => {
  const chats = useChatList();

  useEffect(() => {
    const newChat = Array.from({
      length: 6
    }).map(createChat);
    
    chats.setChatList(newChat);
  }, [])

  return (
    <Grid container>
      <Grid item md = {3}>
        {
          <ChatList chats = {chats.chatList}/>
        }
      </Grid>
      <Grid item md = {9}>
        <Route path = '/chats/:chatId'>
          <Chat chats = {chats.chatList}/>
        </Route>
      </Grid>
    </Grid>
  );
}