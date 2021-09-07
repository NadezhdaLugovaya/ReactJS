import './App.css';
import {Header} from './components/Header';
import {Switch, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Chats } from './pages/Chats';
import { Profile } from './pages/Profile';

function App() {
  return (
    <div className="App">
        <Header/>      
        <Switch>
          <Route path = '/profile'>
            <Profile/>
          </Route>
          <Route path = '/chats'>
            <Chats/>
          </Route>
          <Route path = '/'>
            <Home/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
