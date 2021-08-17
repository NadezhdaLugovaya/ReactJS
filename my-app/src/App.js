import { Message } from "./components/Message/message";
import './App.css';


function App() {
 const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia esse reprehenderit quo nostrum praesentium repellendus error suscipit dolores sapiente.'
  return (
    <div className="App">
      <Message label = {message}/>
    </div>
  );
}

export default App;
