import './App.css';
import {MessageList} from "./components/MessageList/messageList";
import { AddMessage } from "./components/AddMessage/addMessage";
import { useAddMessage } from "./components/hooks/useAddMessage";
import { useChatList } from "./components/hooks/useChatList"
import { useAnswer } from "./components/hooks/useAnswer";
import {ChatList} from "./components/ChatList/ChatList";

function App() {
  const message = useAddMessage();
  const chat = useChatList();
  const answer = useAnswer(()=>{
    const lastMessage = message.messageList[message.messageList.length - 1]
    if(lastMessage.author ===  'user'){
      message.addMessage('Привествую!', 'robot');
    }
  },[message.messageList]);

  return (
    <div className="App">
      <div className = "wrapper">
      <div className = "chat">
          <ChatList chats = {chat.chatList} />
        </div>
        <div className = "message">
          <MessageList messages = {message.messageList} />
          <AddMessage onSubmit = {message.addMessage}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
