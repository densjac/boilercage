import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import App, { Dashboard,  About,  Inbox,  Message } from './App.jsx';

export default class RouterContainer extends React.Component{
  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/* Show the dashboard at / */}
          <IndexRoute component={Dashboard} />
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            <Route path="messages/:id" component={Message} />
          </Route>
        </Route>
      </Router>
    );
  }
}
