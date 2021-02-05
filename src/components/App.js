import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStateData } from '../components/actions';

import NavBar from './NavBar/NavBar';
import Home from './Routes/Home';
import StateDetail from './Routes/StateDetail';
import NotFound from './utils/NotFound';


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
