import React, {useEffect, useReducer, useState, useMemo} from 'react'
import Output from './views/Output'
import axios from 'axios'
import CallAll from './components/CallAll'
import CallById from './components/CallById'
import Prueba from './components/Prueba'
import Config from './components/ConfigurationParams'
import io from 'socket.io-client'
import { UserContext } from './components/ParamsContext';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { StepContext } from '@mui/material'
import Sidebar from './components/sidebar/sidebar'

const socket = io.connect("http://localhost:5000")

function App() {
  const socketFunction = () => {
    socket.emit("send_message");
    console.log("message sent");
  }
  
  useEffect(() => {
    socket.on("receive_message", ()=>{
      console.log("bucle correctísimo")
    })
  }, [socket]);
  
  socketFunction();

  const [value, setValue] = useState(UserContext)
  const providerValue = useMemo(() => ({value, setValue}), [value, setValue])

  return(
    <div className='App'>
      <Router>
        {/* <Sidebar/> */}
        <Switch>
          <UserContext.Provider value={providerValue}>
            <Route exact path="/main" children={<CallAll />} />
            <Route exact path="/main/:id" children={<CallById />} />
            <Route exact path="/prueba" component={Prueba} />
            <Route exact path="/config" component={Config} />
          </UserContext.Provider>
        </Switch>
        
      </Router> 


    </div>
  )
}

export default App