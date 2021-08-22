import React, { useEffect } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './Common/NavBar';
import Home from './views/Home';
import StateDetail from './views/StateDetail';
import NotFound from './utils/NotFound';
import { fetchStateData } from './storage/actions';

import './App.css';


const STATE_DATA_REFRESH_RATE = 1200000; 

const App = (props) => {

  useEffect(() => {

      const getStateData = () => {
        try{
          props.fetchStateData();
        } catch(err) {
          //Not allowed to return anything else then cleanup
          return <NotFound error={err}/>;
        }
      };

      getStateData();

      const timerId = setInterval(getStateData, STATE_DATA_REFRESH_RATE);
      
      return () => {
        clearTimeout(timerId);
      };
    });

  
  return (
    <div className="ui container">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route 
            path='/' exact 
            component={Home} 
          />
          <Route 
            path='/state/:stateCode?'
            component={StateDetail}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default connect(null,{ fetchStateData })(App);
