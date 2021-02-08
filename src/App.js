import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './Common/NavBar';
import Home from './views/Home';
import StateDetail from './views/StateDetail';
import NotFound from './utils/NotFound';
import { fetchStateData } from './storage/actions';

import './App.css';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchStateData();
  }

  
  render() {
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
              path='/state/:stateCode'
              component={StateDetail}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,{ fetchStateData })(App);




/*  
  <SearchBar onFormSubmit={this.onFormSubmit} />
*/
