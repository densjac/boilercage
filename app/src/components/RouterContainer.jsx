import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import App, { Component1,  Component2,  Content, Subcomponent } from './App.jsx';

export default class RouterContainer extends React.Component{
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Content} />
          <Route path="component1" component={Component1} />
          <Route path="component2" component={Component2}>
            <Route path="subcomponent/:id" component={Subcomponent} />
          </Route>
        </Route>
      </Router>
    );
  }
}
