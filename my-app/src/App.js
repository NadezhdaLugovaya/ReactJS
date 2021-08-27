import {MessageList} from "./components/MessageList/messageList";
import './App.css';
import { AddMessage } from "./components/AddMessage/addMessage";
import { useAddMessage } from "./components/hooks/useAddMessage";
import { useAnswer } from "./components/hooks/useAnswer";


function App() {
  const message = useAddMessage();
  const answer = useAnswer(()=>{
    const lastMessage = message.messageList[message.messageList.length - 1]
    if(lastMessage.author ===  'user'){
      message.addMessage('Привествую!', 'robot');
    }
  },[message.messageList])

  return (
    <div className="App">
      <div className = "wrapper">
      <MessageList messages = {message.messageList} />
      </div>
      <AddMessage onSubmit = {message.addMessage}/>
    </div>
  )
}

export default App;
