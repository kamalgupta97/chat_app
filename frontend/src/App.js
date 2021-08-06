
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import socketIOClient from 'socket.io-client'

import ChatHome from './ChatHome';
import Chat from './Chat';

import SocketContext from './Context/SocketContext';


import './App.css';

const ENDPOINT ="http://localhost:3001";

const socket = socketIOClient(ENDPOINT)


function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
      <Router>
        <Switch>
            <Route exact path="/" component={ChatHome}>

            </Route>
            <Route  path="/chat" component={Chat}>

            </Route>
        </Switch>
      </Router>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
